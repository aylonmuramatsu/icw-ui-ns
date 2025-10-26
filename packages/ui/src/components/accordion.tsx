import Nullstack, {
  BaseNullstackClientContext,
  NullstackNode,
} from 'nullstack';

// ============================================
// TYPES & INTERFACES
// ============================================

export type AccordionType = 'single' | 'multiple';

export interface AccordionProps {
  type?: AccordionType;     // 'single' = apenas um aberto, 'multiple' = vários abertos
  defaultOpen?: string[];   // IDs dos itens abertos por padrão
  class?: string;
  style?: any;
}

export interface AccordionItemProps {
  id: string;              // ID único do item
  title: string;           // Título do item
  icon?: any;             // Ícone customizado no header
  disabled?: boolean;     // Desabilita o item
  class?: string;
  style?: any;
}

// ============================================
// ACCORDION CONTEXT (via Nullstack instance)
// ============================================

// Global registry to share accordion instances
const accordionRegistry = new Map();

export class Accordion extends Nullstack<AccordionProps> {
  openItems: string[] = [];
  type: AccordionType = 'single';
  accordionId: string = '';

  initiate({ defaultOpen = [], type = 'single' }: AccordionProps) {
    this.openItems = [...defaultOpen];
    this.type = type;
    this.accordionId = `accordion-${Math.random().toString(36).substr(2, 9)}`;
    accordionRegistry.set(this.accordionId, this);
  }

  terminate() {
    accordionRegistry.delete(this.accordionId);
  }

  isOpen({ id }: { id: string }): boolean {
    return this.openItems.includes(id);
  }

  toggle({ id }: { id: string }) {
    const isCurrentlyOpen = this.isOpen({ id });

    if (this.type === 'single') {
      // Modo single: apenas um item aberto por vez
      this.openItems = isCurrentlyOpen ? [] : [id];
    } else {
      // Modo multiple: vários itens podem estar abertos
      if (isCurrentlyOpen) {
        this.openItems = this.openItems.filter(item => item !== id);
      } else {
        this.openItems = [...this.openItems, id];
      }
    }
  }

  render(
    context: BaseNullstackClientContext<unknown> & AccordionProps
  ): NullstackNode {
    const {
      type = 'single',
      class: className,
      style,
      children,
      ...props
    } = context || {};

    const classes = [
      'accordion',
      className,
    ].filter(Boolean).join(' ');

    return (
      <div
        class={classes}
        data-type={type}
        data-accordion-id={this.accordionId}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  }
}

// ============================================
// ACCORDION ITEM COMPONENT
// ============================================

export class AccordionItem extends Nullstack<AccordionItemProps> {
  accordionInstance: any = null;
  itemRef: HTMLDivElement | null = null;

  hydrate() {
    this.findAccordionInstance();
  }

  setItemRef(element: HTMLDivElement) {
    this.itemRef = element;
    if (element && !this.accordionInstance) {
      this.findAccordionInstance();
    }
  }

  findAccordionInstance() {
    if (this.itemRef) {
      const accordionEl = this.itemRef.closest('[data-accordion-id]') as HTMLElement;
      if (accordionEl) {
        const accordionId = accordionEl.getAttribute('data-accordion-id');
        if (accordionId) {
          this.accordionInstance = accordionRegistry.get(accordionId);
        }
      }
    }
  }

  handleToggle({ id, disabled }: any) {
    if (disabled) return;

    if (!this.accordionInstance) {
      this.findAccordionInstance();
    }

    if (this.accordionInstance) {
      this.accordionInstance.toggle({ id });
    }
  }

  render(
    context: BaseNullstackClientContext<unknown> & AccordionItemProps
  ): NullstackNode {
    const {
      id,
      title,
      icon,
      disabled = false,
      class: className,
      style,
      children,
      ...props
    } = context || {};

    const isOpen = this.accordionInstance ? this.accordionInstance.isOpen({ id }) : false;

    const classes = [
      'accordion-item',
      disabled && 'accordion-item--disabled',
      className,
    ].filter(Boolean).join(' ');

    return (
      <div
        ref={this.setItemRef.bind(this)}
        class={classes}
        data-state={isOpen ? 'open' : 'closed'}
        style={style}
        {...props}
      >
        {/* Header */}
        <button
          type="button"
          class="accordion-item__trigger"
          onclick={() => this.handleToggle({ id, disabled })}
          disabled={disabled}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${id}`}
        >
          <span class="accordion-item__title">
            {icon && <span class="accordion-item__icon">{icon}</span>}
            {title}
          </span>

          <svg
            class="accordion-item__chevron"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        {/* Content */}
        <div
          class="accordion-item__content"
          id={`accordion-content-${id}`}
          aria-hidden={!isOpen}
        >
          <div class="accordion-item__body">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

