import { v4 as uuidV4 } from 'uuid';

// ====================================
// DB constants and dictionaries
// ====================================
const EXPORT_FILE_NAME = 'sso-log-export.json';
const DB_VERSION = 2;
const DB_NAME = 'ssoLog' as const;
export const STORE_NAME = 'horseOwners' as const;

export const PRIMARY_KEY = 'id';

export const DB_OBJECT_TYPE = {
  ACCOUNT: 'account',
  HORSE_OWNER: 'horseOwner',
} as const;

export const DB_INDEX = {
  OBJECT_TYPE: {
    name: 'objectTypeIndex',
    key: 'objectType',
  },
  HORSE_ID: {
    name: 'horseIdIndex',
    key: 'horseId',
  },
  ACCOUNT_ID: {
    name: 'accountIdIndex',
    key: 'accountId',
  },
} as const;

// ====================================
// DB item types
// ====================================
export type DBAccount = {
  id: string;
  objectType: typeof DB_OBJECT_TYPE.ACCOUNT;
  name: string;
  color: string;
};

export type DBHorseOwner = {
  id: string;
  objectType: typeof DB_OBJECT_TYPE.HORSE_OWNER;
  horseId: string;
  accountId: string;
  horseFirstName: string;
  horseSecondName: string;
  // this is a snapshot and will need to be updated when the associated Account updates to stay fresh
  accountColor: string;
};

// ====================================
// DB helpers
// ====================================
export const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const target = event.target as IDBRequest;
      const db = target?.result;

      // create store if needed
      if (!db?.objectStoreNames?.contains(STORE_NAME)) {
        db?.createObjectStore(STORE_NAME, { keyPath: PRIMARY_KEY });
      }

      const store = target?.transaction?.objectStore(STORE_NAME);
      // create additional indexes as needed
      Object.values(DB_INDEX).forEach(({ name, key }) => {
        if (!store?.indexNames.contains(name)) {
          store?.createIndex(name, key, { unique: false, multiEntry: false });
        }
      });
    };

    request.onsuccess = (event) => {
      const target = event.target as IDBRequest;
      resolve(target?.result);
    };

    request.onerror = (event) => {
      const target = event.target as IDBRequest;
      reject('Error opening database: ' + target?.error);
    };
  });
};

export type CreateDBAccount = Omit<DBAccount, typeof PRIMARY_KEY>;
export type CreateDBHorseOwner = Omit<DBHorseOwner, typeof PRIMARY_KEY>;

interface createItemArgs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  db: any;
  data: CreateDBAccount | CreateDBHorseOwner;
}

export const createItem = <Type>({ db, data }: createItemArgs): Promise<Type> | undefined => {
  if (!db) return;
  const transaction = db.transaction(STORE_NAME, 'readwrite');
  const store = transaction.objectStore(STORE_NAME);

  const request = store.add({
    id: uuidV4(),
    ...data,
  });
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

interface UpdateItemArgs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  db: any;
  data: DBAccount | DBHorseOwner;
}

export const updateItem = <Type>({ db, data }: UpdateItemArgs): Promise<Type> | undefined => {
  if (!db) return;
  const transaction = db.transaction(STORE_NAME, 'readwrite');
  const store = transaction.objectStore(STORE_NAME);

  const request = store.put(data);
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

interface RemoveByIdArgs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  db: any;
  id: string;
}

export const removeById = ({ db, id }: RemoveByIdArgs): Promise<boolean> | undefined => {
  if (!db) return;
  const transaction = db.transaction(STORE_NAME, 'readwrite');
  const store = transaction.objectStore(STORE_NAME);

  const request = store.delete(id);
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(false);
  });
};

interface GetByIndexArgs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  db: any;
  indexName: string;
  value: string;
}

export const getByIndex = <Type>({
  db,
  indexName,
  value,
}: GetByIndexArgs): Promise<Array<Type>> | undefined => {
  if (!db) return;
  const transaction = db.transaction(STORE_NAME, 'readonly');
  const store = transaction.objectStore(STORE_NAME);
  const index = store.index(indexName);

  const request = index.getAll(IDBKeyRange.only(value));
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

interface ExportDataArgs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  db: any;
}

export const exportData = ({ db }: ExportDataArgs): Promise<void> | undefined => {
  if (!db) return;

  try {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const objectStore = transaction.objectStore(STORE_NAME);
    const getAllRequest = objectStore.getAll();

    return new Promise((resolve, reject) => {
      getAllRequest.onsuccess = () => {
        const data = getAllRequest.result;
        const jsonString = JSON.stringify(data, null, 2);

        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = EXPORT_FILE_NAME;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        resolve();
      };

      getAllRequest.onerror = (error: Error) => reject(error);
    });
  } catch (error) {
    console.error('Error during export:', error);
  }
};

interface ImportDataArgs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  db: any;
  /** JSON string of the data to import */
  file: string;
}

export const importData = async ({ db, file }: ImportDataArgs) => {
  if (!db) return;

  try {
    const dataArray = JSON.parse(file);
    if (!Array.isArray(dataArray)) {
      throw new Error('JSON data should be an array');
    }

    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const objectStore = transaction.objectStore(STORE_NAME);

    // first delete all the existing data
    await objectStore.clear();
    // then add all the data from the file
    for (const dataObj of dataArray) {
      await objectStore.put(dataObj);
    }
  } catch (error) {
    console.error('Error during export:', error);
  }
};
