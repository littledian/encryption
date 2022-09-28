import { ComponentType } from 'react';
import ReactDOM from 'react-dom/client';

export interface ModalComponentProps {
  onClose: () => void;
  open: boolean;
  afterClose: () => void;
}

export default function createOpen<P extends ModalComponentProps = any>(
  Component: ComponentType<P>
) {
  return function (params: Omit<P, 'onClose' | 'open' | 'afterClose'>) {
    return new Promise<void>((resolve) => {
      const el = document.createElement('div');
      document.body.appendChild(el);
      const config: P = {
        ...params,
        onClose,
        afterClose,
        open: true
      } as any;
      const root = ReactDOM.createRoot(el);

      function render(props: P) {
        root.render(<Component {...props} />);
      }

      function onClose() {
        config.open = false;
        render(config);
        resolve();
      }

      function afterClose() {
        setTimeout(() => {
          root.unmount();
          document.body.removeChild(el);
        });
      }

      render(config);
    });
  };
}
