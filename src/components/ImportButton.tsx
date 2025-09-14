import { useRef, type ChangeEvent } from 'react';
import { useDb } from '@/data/DbProvider';
import { Button } from '@/components/Button';
import { FolderUp } from 'lucide-react';
import { ConfirmDialog } from './ConfirmDialog';

export const ImportButton = () => {
  const { importFromFile, refetchData } = useDb();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement> | undefined) => {
    const file = e?.target?.files?.[0];

    if (!file || !file.name.endsWith('.json')) {
      console.error('Please upload a JSON file');
      return;
    }

    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = async (e) => {
      const fileAsString = e.target?.result;

      if (typeof fileAsString === 'string') {
        await importFromFile(fileAsString);
        await refetchData();
      }
    };
  };

  return (
    <>
      <input
        type="file"
        accept=".json"
        className="hidden"
        ref={inputRef}
        onChange={handleFileUpload}
      />

      <ConfirmDialog
        triggerButton={
          <Button>
            <FolderUp className="text-accent-foreground mt-1/2 mr-1/2" />
          </Button>
        }
        title="Import"
        description="import new table, save your shit before you do this because it will overwrite your table."
        confirmButton={<Button onClick={() => inputRef.current?.click()}>sure</Button>}
      />
    </>
  );
};
