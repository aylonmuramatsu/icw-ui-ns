import { tv } from '@icw/utils';
import Nullstack, { NullstackNode } from 'nullstack';

const styles = tv({
  base: 'block caption font-medium text-gray-700 mb-2',
  variants: {},
});
export class FormLabel extends Nullstack {
  render({ class: className, children, ...props }: any): NullstackNode {
    return (
      <label class={styles({ class: className })} {...props}>
        {children}
      </label>
    );
  }
}
