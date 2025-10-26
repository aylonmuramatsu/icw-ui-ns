import Nullstack from "nullstack";
import { Toast } from "./toast";

export type ToastPosition =
  | "top-right"
  | "top-left"
  | "top-center"
  | "bottom-right"
  | "bottom-left"
  | "bottom-center";
export type ToasterProps = {
  position: ToastPosition;
}
export class Toaster extends Nullstack<ToasterProps> {
  toasts = []
  update() {
    toaster = (type: string, title: string = 'Aviso', message: string, duration = 4 * 1000) => {
      this.addToast({
        toast: {
          type,
          title,
          message,
          duration,
        },
      });
      console.log(this.toasts)
    };
    instance = this;
  }

  addToast({ toast }) {
    const id = Math.random().toString(36).substr(2, 9);
    const new_toast: any = {
      ...toast,
      id,
      visible: true,
      createdAt: Date.now(),
      duration: toast.duration ?? 5000,
    };

    this.toasts.push(new_toast);

    // Auto remove after duration
    if (new_toast.duration > 0) {
      setTimeout(() => {
        this.removeToast({ id });
      }, new_toast.duration);
    }

    return id;
  }

  removeToast({ id }) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
  }

  updateToast({ id, updates }) {
    let toast = this.toasts.find((t) => t.id === id);
    if (!toast) return;
    toast = { ...toast, ...updates };
  }

  clearToasts() {
    this.toasts = [];
  }
  render(context) {
    console.log(this.toasts)
    return (
      <div class="toaster" data-position={context?.position || 'top-right'}>

        {this.toasts.map((toast) => (
          <Toast toast={toast} />

        ))}

      </div >
    )
  }
}


export let toaster = (type: string, title?: string, message: string, duration?: number) => null;
export let instance = null

