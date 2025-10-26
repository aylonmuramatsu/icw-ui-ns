import Nullstack from "nullstack"

export class ModalBase extends Nullstack {

  render({ visible, children }: any) {
    return <div class={['modal  fade', visible && 'open']}>{children}</div>
  }

}
