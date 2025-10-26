import { ModalBase } from './modal-base';
import { ModalBody } from './modal-body';
import { ModalDialog } from './modal-dialog';
import { ModalFooter } from './modal-footer';
import { ModalHeader } from './modal-header';

type ModalType = typeof ModalBase & {
  Dialog: typeof ModalDialog;
  Footer: typeof ModalFooter;
  Body: typeof ModalBody;
  Header: typeof ModalHeader;
};

const Modal = ModalBase as ModalType;
Modal.Dialog = ModalDialog;
Modal.Footer = ModalFooter;
Modal.Body = ModalBody;
Modal.Header = ModalHeader;

export { Modal };
