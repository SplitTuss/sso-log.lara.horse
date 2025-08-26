import { useState, useEffect, useCallback } from 'react';
import {
  initDB,
  createItem,
  updateItem,
  removeById,
  getByIndex,
  DB_INDEX,
  DB_OBJECT_TYPE,
  type DBAccount,
  type DBHorseOwner,
  type CreateDBAccount,
  type CreateDBHorseOwner,
} from '../data/db';

export const useDb = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [db, setDb] = useState<any>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    initDB().then(setDb).catch(setError);
  }, []);

  const addAccount = useCallback(
    async (input: Omit<CreateDBAccount, typeof DB_INDEX.OBJECT_TYPE.key>) => {
      const data = {
        [DB_INDEX.OBJECT_TYPE.key]: DB_OBJECT_TYPE.ACCOUNT,
        ...input,
      };
      return createItem<DBAccount>({ db, data });
    },
    [db],
  );

  const updateAccount = useCallback(
    async (input: Omit<DBAccount, typeof DB_INDEX.OBJECT_TYPE.key>) => {
      const data = {
        [DB_INDEX.OBJECT_TYPE.key]: DB_OBJECT_TYPE.ACCOUNT,
        ...input,
      };
      return updateItem<DBAccount>({ db, data });
    },
    [db],
  );

  const addHorseOwner = useCallback(
    async (input: Omit<CreateDBHorseOwner, typeof DB_INDEX.OBJECT_TYPE.key>) => {
      const data = {
        [DB_INDEX.OBJECT_TYPE.key]: DB_OBJECT_TYPE.HORSE_OWNER,
        ...input,
      };
      return createItem<DBHorseOwner>({ db, data });
    },
    [db],
  );

  const updateHorseOwner = useCallback(
    async (input: Omit<DBHorseOwner, typeof DB_INDEX.OBJECT_TYPE.key>) => {
      const data = {
        [DB_INDEX.OBJECT_TYPE.key]: DB_OBJECT_TYPE.HORSE_OWNER,
        ...input,
      };
      return updateItem<DBHorseOwner>({ db, data });
    },
    [db],
  );

  const removeData = useCallback(
    async (id: string) => {
      return removeById({ db, id });
    },
    [db],
  );

  const getAllByHorseId = useCallback(
    (horseId: string) => {
      return getByIndex<DBHorseOwner>({
        db,
        indexName: DB_INDEX.HORSE_ID.name,
        value: horseId,
      });
    },
    [db],
  );

  const getAllByAccountId = useCallback(
    (accountId: string) => {
      return getByIndex<DBHorseOwner>({
        db,
        indexName: DB_INDEX.ACCOUNT_ID.name,
        value: accountId,
      });
    },
    [db],
  );

  const getAllAccounts = useCallback(() => {
    return getByIndex<DBAccount>({
      db,
      indexName: DB_INDEX.OBJECT_TYPE.name,
      value: DB_OBJECT_TYPE.ACCOUNT,
    });
  }, [db]);

  return {
    db,
    error,
    addAccount,
    updateAccount,
    addHorseOwner,
    updateHorseOwner,
    removeData,
    getAllByHorseId,
    getAllByAccountId,
    getAllAccounts,
  };
};
