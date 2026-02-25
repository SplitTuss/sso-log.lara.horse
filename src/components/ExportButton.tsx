import { useDb } from '@/data/DbProvider';
import { Button } from '@/components/shadcn/Button';
import { FolderDown } from 'lucide-react';

export const ExportButton = () => {
  const { exportToFile } = useDb();

  return (
    <Button onClick={exportToFile} variant="outline" title="export data">
      <FolderDown className="text-accent mt-1/2 mr-1/2" />
    </Button>
  );
};
