import { tv } from '@insightcreativewebs/utils';
import Nullstack, { NullstackNode } from 'nullstack';

const styles = tv({
  base: 'form-label',
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
