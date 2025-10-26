
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-const-assign */

import Nullstack from 'nullstack';
export let overlay: {
  _instance: null | any;
  show: (id: string, params: any) => {};
  close: (id: string) => {};
};

export class OverlayManager extends Nullstack {

  overlay = []
  _show(context, id, data) {
    setTimeout(() => {
      const overlay = context.overlay.find((m) => m.key === id)
      if (!overlay) {
        // @ts-ignore
        console.warn(`overlay [${id}]: Não registrado`)
        return
      }

      if (overlay.visible) return
      const order = context.overlay.filter((m) => m.visible)?.length
      document.body.classList.add('overflow-hidden')
      overlay.data = data || null
      overlay.visible = true
      overlay.order = order
      overlay.onOpen && overlay.onOpen()
    }, 50)
  }

  _close(context, id) {
    const overlay = context.overlay.find((m) => m.key === id)
    if (!overlay) {
      console.warn(`overlay [${id}]: Não registrado`)
      return
    }

    if (!overlay.visible) return
    setTimeout(() => {
      overlay.visible = false
      setTimeout(() => {
        overlay?.onClose && overlay.onClose()
        overlay.data = null
        const order = context.overlay.filter((m) => m.visible)?.length
        overlay.order = order
        document.body.classList.remove('overflow-hidden')
      }, 200)
    }, 100)
  }

  prepare() {
    overlay = {
      _instance: this,
      show: this._show.bind(null, this),
      close: this._close.bind(null, this),
    }
  }

  render(context) {
    return (
      <>
        {this.overlay
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
          .map((m, order) => {
            const component = <m.component overlay={m} order={order} />

            return component
          })}
        {this.overlay.filter((m) => m.visible).length > 0 && <div class="overlay" />}
      </>
    )
  }

}
