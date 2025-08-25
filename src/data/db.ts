import { v4 as uuidV4 } from 'uuid';

// ====================================
// DB constants and dictionaries
// ====================================
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
    const request = indexedDB.open(DB_NAME);

    request.onupgradeneeded = (event) => {
      const target = event.target as IDBRequest;
      const db = target?.result;

      if (!db?.objectStoreNames?.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: PRIMARY_KEY });
        // create additional indexes
        Object.values(DB_INDEX).forEach(({ name, key }) => {
          store.createIndex(name, key, { unique: false, multiEntry: false });
        });
      }
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

export type CreateDBAccountData = Omit<DBAccount, typeof PRIMARY_KEY>;
export type CreateDBHorseOwner = Omit<DBHorseOwner, typeof PRIMARY_KEY>;

interface createItemArgs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  db: any;
  data: CreateDBAccountData | CreateDBHorseOwner;
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
