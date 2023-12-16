import { ModalContent } from './views/ModalContent';
import { ModalContentActions } from './views/ModalContentActions';
import { ModalContentWrapper } from './views/ModalContentWrapper';
import { ModalHeader } from './views/ModalHeader';
import { ModalHeaderActions } from './views/ModalHeaderActions';
import { ModalRoot } from './views/ModalRoot';

export const Modal = {
  root: ModalRoot,
  contentWrapper: ModalContentWrapper,
  header: ModalHeader,
  headerActions: ModalHeaderActions,
  content: ModalContent,
  contentActions: ModalContentActions
};
