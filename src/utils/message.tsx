import { ReactNode } from 'react';
import { Alert, Snackbar, AlertColor } from '@mui/material';
import createOpen, { ModalComponentProps } from './createOpen';

interface MessageProps extends ModalComponentProps {
  type: AlertColor;
  message: ReactNode;
}

function Message(props: MessageProps) {
  const { open, onClose, afterClose, type, message } = props;

  function handleClose() {
    onClose();
    setTimeout(() => {
      afterClose();
    }, 2000);
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

const openMessage = createOpen(Message);

export const success = (msg: string) =>
  openMessage({ type: 'success', message: msg });
export const warning = (msg: string) =>
  openMessage({ type: 'warning', message: msg });
export const info = (msg: string) =>
  openMessage({ type: 'info', message: msg });
export const error = (msg: string) =>
  openMessage({ type: 'error', message: msg });
