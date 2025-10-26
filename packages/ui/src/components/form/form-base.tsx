import Nullstack from "nullstack";
import { twMerge } from "tw-merge";

export class FormBase extends Nullstack {
  render({ children, class: className, ...props }: any) {
    return (
      // @ts-ignore
      <form class={twMerge('form', className)} novalidate {...props}>
        {children}
      </form>
    );
  }
}
