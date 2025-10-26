import Nullstack from 'nullstack'

export class ModalDialog extends Nullstack {

  render({ children }) {
    return <div class="modal-dialog">{children}</div>
  }

}
