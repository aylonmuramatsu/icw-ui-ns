import Nullstack, {
  BaseNullstackClientContext,
  NullstackNode,
} from 'nullstack';

// ============================================
// TYPES & INTERFACES
// ============================================

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AvatarShape = 'circle' | 'square';
export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';

export interface AvatarProps {
  src?: string;           // URL da imagem
  alt?: string;          // Texto alternativo
  fallback?: string;     // Iniciais ou texto de fallback
  icon?: any;           // Ícone customizado para fallback
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: AvatarStatus; // Indicador de status
  border?: boolean;      // Adiciona borda branca
  class?: string;
  style?: any;
}

export interface AvatarGroupProps {
  max?: number;          // Número máximo de avatares visíveis
  size?: AvatarSize;
  shape?: AvatarShape;
  spacing?: 'tight' | 'normal' | 'loose';
  class?: string;
  style?: any;
}

// ============================================
// AVATAR COMPONENT
// ============================================

export class Avatar extends Nullstack<AvatarProps> {
  imageError = false;

  handleImageError = () => {
    this.imageError = true;
  };

  getInitials(text?: string): string {
    if (!text || typeof text !== 'string') return '';
    const trimmed = text.trim();
    if (!trimmed) return '';

    const words = trimmed.split(' ').filter(word => word.length > 0);
    if (words.length === 0) return '';
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }

  render(
    context: BaseNullstackClientContext<unknown> & AvatarProps
  ): NullstackNode {
    const {
      src,
      alt = '',
      fallback,
      icon,
      size = 'md',
      shape = 'circle',
      status,
      border = false,
      class: className,
      style,
      ...props
    } = context || {};

    const showImage = src && !this.imageError;
    const showFallback = !showImage;
    const initials = fallback ? this.getInitials(fallback) : '';

    const classes = [
      'avatar',
      border && 'avatar--border',
      className,
    ].filter(Boolean).join(' ');

    return (
      <div
        class={classes}
        data-size={size}
        data-shape={shape}
        style={style}
        {...props}
      >
        {showImage && (
          <img
            src={src}
            alt={alt}
            class="avatar__image"
            onerror={this.handleImageError}
          />
        )}

        {showFallback && (
          <div class="avatar__fallback">
            {icon ? (
              <span class="avatar__icon">{icon}</span>
            ) : initials ? (
              <span class="avatar__initials">{initials}</span>
            ) : (
              <svg
                class="avatar__default-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>
        )}

        {status && (
          <span class="avatar__status" data-status={status} data-size={size} />
        )}
      </div>
    );
  }
}

// ============================================
// AVATAR GROUP COMPONENT
// ============================================

export class AvatarGroup extends Nullstack<AvatarGroupProps> {
  render(
    context: BaseNullstackClientContext<unknown> & AvatarGroupProps
  ): NullstackNode {
    const {
      max = 5,
      size = 'md',
      shape = 'circle',
      spacing = 'normal',
      class: className,
      style,
      children,
      ...props
    } = context || {};

    // Contar avatares filhos
    const avatarChildren = Array.isArray(children) ? children : [children];
    const visibleAvatars = avatarChildren.filter(Boolean).slice(0, max);
    const remainingCount = avatarChildren.filter(Boolean).length - max;

    const classes = [
      'avatar-group',
      className,
    ].filter(Boolean).join(' ');

    return (
      <div
        class={classes}
        data-size={size}
        data-shape={shape}
        data-spacing={spacing}
        style={style}
        {...props}
      >
        {visibleAvatars}

        {remainingCount > 0 && (
          <div class="avatar avatar--excess" data-size={size} data-shape={shape}>
            <div class="avatar__fallback">
              <span class="avatar__initials">+{remainingCount}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

