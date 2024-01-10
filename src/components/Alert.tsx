import { ReactNode } from "react";

type AlertProps = {
  children: ReactNode;
  onDismiss: () => void;
};

function Alert({ children, onDismiss }: AlertProps) {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <button
        type="button"
        onClick={onDismiss}
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
