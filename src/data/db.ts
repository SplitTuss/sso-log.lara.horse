const DB_NAME = 'ssoLog';
export const STORE_NAME = 'horseOwners';
export const OBJECT_TYPE_INDEX = 'objectTypeIndex';
export const HORSE_ID_INDEX = 'horseIdIndex';
export const ACCOUNT_ID_INDEX = 'accountIdIndex';

export const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request.onupgradeneeded = (event: any) => {
      const db = event.target?.result;

      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        // create additional indexes
        store.createIndex(OBJECT_TYPE_INDEX, 'type', { unique: false, multiEntry: false });
        store.createIndex(HORSE_ID_INDEX, 'horseId', { unique: false, multiEntry: false });
        store.createIndex(ACCOUNT_ID_INDEX, 'accountId', { unique: false, multiEntry: false });
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request.onsuccess = (event: any) => {
      resolve(event.target?.result);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request.onerror = (event: any) => {
      reject('Error opening database: ' + event.target?.error);
    };
  });
};
