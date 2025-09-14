import { tv } from '@icw/utils';
import Nullstack from 'nullstack';

const styles = tv({
  base: '',
});
export class FormGroup extends Nullstack {
  render({ children, class: className, ...props }: any) {
    return (
      <div class={styles({ className })} {...props}>
        {children}
      </div>
    );
  }
}
