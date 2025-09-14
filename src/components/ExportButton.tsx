import { useDb } from '@/data/DbProvider';
import { Button } from '@/components/Button';
import { FolderDown } from 'lucide-react';

export const ExportButton = () => {
  const { exportToFile } = useDb();

  return (
    <Button onClick={exportToFile}>
      <FolderDown className="text-accent-foreground mt-1/2 mr-1/2" />
    </Button>
  );
};
