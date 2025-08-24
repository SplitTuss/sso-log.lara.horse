import { useState, useEffect, useCallback } from 'react';
import { initDB, STORE_NAME, HORSE_ID_INDEX, ACCOUNT_ID_INDEX } from '../data/db';

export const useDb = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [db, setDb] = useState<any>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    initDB().then(setDb).catch(setError);
  }, []);

  const addData = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (data: any) => {
      if (!db) return;
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);

      const request = store.add(data);
      return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    },
    [db],
  );

  const removeData = useCallback(
    async (key: string) => {
      if (!db) return;
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);

      const request = store.delete(key);
      return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    },
    [db],
  );

  const getAllByHorseId = useCallback(
    (horseId: string) => {
      if (!db) return;
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const horseIdIndex = store.index(HORSE_ID_INDEX);

      const request = horseIdIndex.getAll(IDBKeyRange.only(horseId));
      return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    },
    [db],
  );

  const getAllByAccountId = useCallback(
    (accountId: string) => {
      if (!db) return;
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const accountIdIndex = store.index(ACCOUNT_ID_INDEX);

      const request = accountIdIndex.getAll(IDBKeyRange.only(accountId));
      return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    },
    [db],
  );

  return { db, error, addData, removeData, getAllByHorseId, getAllByAccountId };
};
