import { tv as originalTV } from 'tailwind-variants'

//@ts-ignore
import { defaultTheme, typography } from './themes'

const twMergeConfig = {
  classGroups: {
    'font-size': [
      {
        text: Object.keys(typography),
      },
    ],
    'text-color': [{ text: Object.keys(defaultTheme.colors) }],
    'background-color': [
      { bg: Object.keys(defaultTheme.colors) },
      { bg: Object.keys(defaultTheme.extras) },
    ],
  },
}


export const tv = (options: any) => {
  return originalTV(options, {
    twMergeConfig,
  })
}
