import { useState, useEffect, useCallback, createContext, useContext } from 'react';
import {
  initDB,
  createItem,
  updateItem,
  removeById,
  getByIndex,
  exportData,
  DB_INDEX,
  DB_OBJECT_TYPE,
  type DBAccount,
  type DBHorseOwner,
  type CreateDBAccount,
  type CreateDBHorseOwner,
} from '../data/db';

type OmitObjectType<Type> = Omit<Type, typeof DB_INDEX.OBJECT_TYPE.key>;

interface DbContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  db: any;
  error: Error | null;
  accounts: Array<DBAccount> | null;
  horseOwners: Array<DBHorseOwner> | null;
  addAccount: (input: OmitObjectType<CreateDBAccount>) => Promise<DBAccount | undefined>;
  updateAccount: (input: OmitObjectType<DBAccount>) => Promise<DBAccount | undefined>;
  addHorseOwner: (input: OmitObjectType<CreateDBHorseOwner>) => Promise<DBHorseOwner | undefined>;
  updateHorseOwner: (input: OmitObjectType<DBHorseOwner>) => Promise<DBHorseOwner | undefined>;
  removeData: (id: string) => Promise<boolean | undefined>;
  refetchData: () => Promise<void>;
  exportToFile: () => Promise<void>;
}

const DbContext = createContext<DbContextType>({
  db: null,
  error: null,
  accounts: null,
  horseOwners: null,
  addAccount: () => Promise.resolve(undefined),
  updateAccount: () => Promise.resolve(undefined),
  addHorseOwner: () => Promise.resolve(undefined),
  updateHorseOwner: () => Promise.resolve(undefined),
  removeData: () => Promise.resolve(undefined),
  refetchData: () => Promise.resolve(undefined),
  exportToFile: () => Promise.resolve(undefined),
});

export const useDb = () => {
  const context = useContext(DbContext);
  if (!context) {
    throw new Error('useDb must be used within a DbProvider');
  }
  return context;
};

interface DbProviderProps {
  children: React.ReactNode;
}

export const DbProvider = ({ children }: DbProviderProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [db, setDb] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [accounts, setAccounts] = useState<Array<DBAccount> | null>(null);
  const [horseOwners, setHorseOwners] = useState<Array<DBHorseOwner> | null>(null);

  const handleLoadData = useCallback(async () => {
    const [accountsResult, horseOwnersResult] = await Promise.all([
      getByIndex<DBAccount>({
        db,
        indexName: DB_INDEX.OBJECT_TYPE.name,
        value: DB_OBJECT_TYPE.ACCOUNT,
      }),
      getByIndex<DBHorseOwner>({
        db,
        indexName: DB_INDEX.OBJECT_TYPE.name,
        value: DB_OBJECT_TYPE.HORSE_OWNER,
      }),
    ]);

    if (Array.isArray(accountsResult)) setAccounts(accountsResult);
    if (Array.isArray(horseOwnersResult)) setHorseOwners(horseOwnersResult);
  }, [db]);

  useEffect(() => {
    if (!accounts && !horseOwners) handleLoadData();
  }, [accounts, horseOwners, handleLoadData]);

  useEffect(() => {
    initDB().then(setDb).catch(setError);
  }, []);

  const addAccount: DbContextType['addAccount'] = useCallback(
    async (input) => {
      const data = {
        [DB_INDEX.OBJECT_TYPE.key]: DB_OBJECT_TYPE.ACCOUNT,
        ...input,
      };
      return createItem({ db, data });
    },
    [db],
  );

  const updateAccount: DbContextType['updateAccount'] = useCallback(
    async (input) => {
      const data = {
        [DB_INDEX.OBJECT_TYPE.key]: DB_OBJECT_TYPE.ACCOUNT,
        ...input,
      };
      return updateItem({ db, data });
    },
    [db],
  );

  const addHorseOwner: DbContextType['addHorseOwner'] = useCallback(
    async (input) => {
      const data = {
        [DB_INDEX.OBJECT_TYPE.key]: DB_OBJECT_TYPE.HORSE_OWNER,
        ...input,
      };
      return createItem({ db, data });
    },
    [db],
  );

  const updateHorseOwner: DbContextType['updateHorseOwner'] = useCallback(
    async (input) => {
      const data = {
        [DB_INDEX.OBJECT_TYPE.key]: DB_OBJECT_TYPE.HORSE_OWNER,
        ...input,
      };
      return updateItem({ db, data });
    },
    [db],
  );

  const removeData: DbContextType['removeData'] = useCallback(
    async (id) => removeById({ db, id }),
    [db],
  );

  const exportToFile: DbContextType['exportToFile'] = useCallback(
    async () => exportData({ db }),
    [db],
  );

  return (
    <DbContext.Provider
      value={{
        db,
        error,
        accounts,
        horseOwners,
        addAccount,
        updateAccount,
        addHorseOwner,
        updateHorseOwner,
        removeData,
        refetchData: handleLoadData,
        exportToFile,
      }}
    >
      {children}
    </DbContext.Provider>
  );
};
