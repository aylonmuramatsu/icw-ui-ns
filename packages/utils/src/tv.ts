import { tv as originalTV } from 'tailwind-variants'

//@ts-ignore

const twMergeConfig = {
  classGroups: {
    // 'font-size': [
    //   {
    //     text: Object.keys(typography),
    //   },
    // ],
    // 'text-color': [
    //   { text: Object.keys(defaultTheme.colors) },
    //   { text: Object.keys(defaultTheme.extras) },
    // ],
    // 'background-color': [
    //   { bg: Object.keys(defaultTheme.colors) },
    //   { bg: Object.keys(defaultTheme.extras) },
    // ],
    // // 🎯 Adicionar border colors customizadas
    // 'border-color': [
    //   { border: Object.keys(defaultTheme.colors) },
    //   { border: Object.keys(defaultTheme.extras) },
    // ],
    // // 🎯 Adicionar ring colors customizadas
    // 'ring-color': [
    //   { ring: Object.keys(defaultTheme.colors) },
    //   { ring: Object.keys(defaultTheme.extras) },
    // ],
  },
}


export const tv = (options: any) => {
  return originalTV(options, {
    twMergeConfig,
  })
}
