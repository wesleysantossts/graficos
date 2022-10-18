export interface ThemeInterface {
  header: ThemePropertie
  body: ThemePropertie
  button: ThemePropertie
}

export type ThemePropertie = {
  background?: ThemePropertieType
  text?: ThemePropertieType
}

export type ThemePropertieType = {
  primary: string
  secondary: string
  terciary?: string
}

const Theme = {
  header: {
    background: {
      primary: 'black',
      secondary: ''
    },
    text: {
      primary: 'white',
      secondary: ''
    }
  },
  body: {
    background: {
      primary: '#ffffff',
      secondary: 'AliceBlue'
    }
  },
  button: {
    background: {
      primary: '#e3cb6b',
      secondary: ''
    },
    text: {
      primary: 'black',
      secondary: ''
    }
  }
} as ThemeInterface

export default Theme
