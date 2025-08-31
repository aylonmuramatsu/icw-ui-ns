import { ComponentConfig, ComponentVariant } from '../components-config';

export function generateComponentCode(
  componentConfig: ComponentConfig,
  variant: ComponentVariant | undefined
): string {
  if (!variant || !variant.props) {
    return '<!-- Component not found -->';
  }
  
  const { component } = componentConfig;
  const { props } = variant;
  
  // Se for um elemento HTML nativo
  if (typeof component === 'string') {
    return generateHtmlCode(component, props);
  }
  
  // Se for um componente React/Nullstack
  return generateReactCode(component.name || 'Component', props);
}

function generateHtmlCode(tagName: string, props: Record<string, any>): string {
  if (!props) {
    return `<${tagName} />`;
  }
  
  const attributes = Object.entries(props)
    .map(([key, value]) => {
      if (key === 'children') return null;
      return `${key}="${value}"`;
    })
    .filter(Boolean)
    .join(' ');
  
  const children = props.children || '';
  
  if (children) {
    return `<${tagName}${attributes ? ` ${attributes}` : ''}>${children}</${tagName}>`;
  }
  
  return `<${tagName}${attributes ? ` ${attributes}` : ''} />`;
}

function generateReactCode(componentName: string, props: Record<string, any>): string {
  if (!props) {
    return `<${componentName} />`;
  }
  
  const attributes = Object.entries(props)
    .map(([key, value]) => {
      if (key === 'children') return null;
      if (typeof value === 'string') {
        return `${key}="${value}"`;
      }
      return `${key}={${JSON.stringify(value)}}`;
    })
    .filter(Boolean)
    .join(' ');
  
  const children = props.children || '';
  
  if (children) {
    return `<${componentName}${attributes ? ` ${attributes}` : ''}>${children}</${componentName}>`;
  }
  
  return `<${componentName}${attributes ? ` ${attributes}` : ''} />`;
}
