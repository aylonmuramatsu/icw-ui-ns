/**
 * Converte um objeto JS para string CSS.
 * Exemplo:
 *   { backgroundColor: "#fff", fontSize: "16px" }
 *   => "background-color: #fff; font-size: 16px;"
 */
export function jsToCss(
  obj: Record<string, string | number | undefined | null>
): string {
  if (!obj || typeof obj !== 'object') return '';
  return Object.entries(obj)
    .filter(([_, v]) => v !== undefined && v !== null)
    .map(([k, v]) => {
      // camelCase para kebab-case
      const cssKey = k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
      return `${cssKey}: ${v};`;
    })
    .join(' ');
}

import { overlay } from '@insightcreativewebs/ui';
import { v7 } from 'uuid';

export const useRegisterOverlay = (key, component, options) => {
  const new_modal = {
    key,
    component,
    visible: false,
    data: null,
    order: 0,
    closing: false,
    onOpen: options?.onOpen || function () {},
    onClose: options?.onClose || function () {},
    disableScroll: options?.disableScroll || true,
    options,
    id: v7(),
    unregister: () => {
      const cur_overlay = overlay._instance.overlay.find((m) => m.key === key);
      if (!cur_overlay) return;
      // @ts-ignore
      overlay._instance.overlay = overlay._instance.overlay.filter(
        (m) => m.key !== key
      );
    },
  };
  overlay._instance.overlay.push(new_modal);
  return overlay._instance.overlay.find((m) => m.key === new_modal.key);
};
