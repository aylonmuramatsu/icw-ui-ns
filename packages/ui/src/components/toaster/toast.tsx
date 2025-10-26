
import Nullstack, { NullstackClientContext } from "nullstack";
import { CircleCheck, CircleX, Info, TriangleAlert, X } from "../lucide-icons";
import { instance } from "./toaster";
export type ToastType = "success" | "error" | "info" | "warning"; 1

export interface IToast {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
  title?: string;
  visible: boolean;
  createdAt: number;
}

interface ToastProps {
  toast: IToast;
}

export class Toast extends Nullstack {
  visible = false;
  progressWidth = 100;
  progressInterval: any = null;

  hydrate({ toast }: NullstackClientContext<ToastProps>) {
    setTimeout(() => {
      this.visible = true;
    }, 10);

    if (toast.duration && toast.duration > 0) {
      this.startProgressAnimation({ duration: toast.duration });
    }
  }

  startProgressAnimation({ duration }) {
    const steps = 100;
    const interval = duration / steps;
    let currentStep = 0;

    this.progressInterval = setInterval(() => {
      currentStep++;
      this.progressWidth = ((steps - currentStep) / steps) * 100;

      if (currentStep >= steps) {
        clearInterval(this.progressInterval!);
        this.progressInterval = null;
      }
    }, interval);
  }

  terminate() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  handleRemove = ({
    toast,
    instances,
  }: NullstackClientContext & any) => {
    this.visible = false;

    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }

    setTimeout(() => {
      instance.removeToast({
        id: toast.id,
      });
    }, 500);
  };

  getIcon({ type }) {
    const iconSize = 22;

    switch (type) {
      case "success":
        return <CircleCheck size={iconSize} />;
      case "error":
        return <CircleX size={iconSize} />;
      case "info":
        return <Info size={iconSize} />;
      case "warning":
        return <TriangleAlert size={iconSize} />;
      default:
        return <Info size={iconSize} />;
    }
  }

  render({ toast }: NullstackClientContext<ToastProps>) {


    return (
      <div
        class="toast "
        data-state={this.visible ? "open" : "closed"}
        data-type={toast.type}
      >
        {/* Main Content */}
        <div class="toast__content">
          {/* Icon */}
          <div class="toast__icon" data-type={toast.type}>
            {this.getIcon({ type: toast.type })}
          </div>

          {/* Body */}
          <div class="toast__body">
            {toast.title && (
              <h3 class="toast__title" data-type={toast.type}>
                {toast.title}
              </h3>
            )}
            <p html={toast.message} class="toast__description" />
          </div>

          {/* Close Button */}
          <button
            onclick={this.handleRemove}
            class="toast__close"
            data-type={toast.type}
            aria-label="Fechar notificação"
          >
            <X size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Progress Bar */}
        {!!toast.duration && toast.duration > 0 && (
          <div class="toast__progress-container">
            <div
              class="toast__progress-bar"
              data-type={toast.type}
              style={`width: ${this.progressWidth}%`}
            />
          </div>
        )}
      </div>
    );
  }
}