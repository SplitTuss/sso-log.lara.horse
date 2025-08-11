import { useState, useEffect } from 'react';
import { initDB, STORE_NAME } from '../data/db';

export const useDb = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [db, setDb] = useState<any>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    initDB().then(setDb).catch(setError);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addData = async (data: any) => {
    if (!db) return;
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.add(data);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  };

  const removeData = async (key: string) => {
    if (!db) return;
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(key);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  };

  return { db, error, addData, removeData };
};
