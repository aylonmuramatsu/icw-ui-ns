import Nullstack from "nullstack";

export class FormBase extends Nullstack {
  render({ children, ...props }: any) {
    return (
      <form novalidate {...props}>
        {children}
      </form>
    );
  }
}
