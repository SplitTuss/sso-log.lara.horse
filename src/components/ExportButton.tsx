import React from 'react';
import { useDb } from '@/data/DbProvider';
import { Button } from '@/components/Button';

export const ExportButton = () => {
  const { exportToFile } = useDb();

  return <Button onClick={exportToFile}>Export All Data</Button>;
};
