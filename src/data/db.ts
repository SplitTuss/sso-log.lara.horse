const DB_NAME = 'ssoLog';
export const STORE_NAME = 'horseOwners';

export const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request.onupgradeneeded = (event: any) => {
      const db = event.target?.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
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
