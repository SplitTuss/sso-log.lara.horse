import { Button } from './Button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from './Dialog';

interface ConfirmDialogProps {
  triggerButton: React.ReactNode;
  title: string;
  description: string;
  confirmButton: React.ReactNode;
}

export const ConfirmDialog = ({
  triggerButton,
  title,
  description,
  confirmButton,
}: ConfirmDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger>{triggerButton}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">{title}</DialogTitle>
        </DialogHeader>

        <DialogDescription className="text-center">{description}</DialogDescription>

        <DialogFooter>
          <DialogClose>
            <Button variant="secondary" size="lg">
              cancel
            </Button>
          </DialogClose>

          <DialogClose>{confirmButton}</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
