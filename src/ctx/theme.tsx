import {
  createContextId,
  useContext,
  useContextProvider,
  useStore,
  useVisibleTask$,
} from '@builder.io/qwik'

interface Theme {
  theme: 'light' | 'dark'
}

export const ThemeContext = createContextId<Theme>('theme')

export const useThemeProvider = () => {
  const store = useStore<{ theme: string }>({
    theme: '',
  })

  useContextProvider(ThemeContext, store)

  useVisibleTask$(({ track }) => {
    const change = track(() => store.theme)

    /**
     * We set theme to an '' when initialized, make sure we grab the actual
     * value
     */
    if (!store.theme) {
      store.theme = localStorage.theme || 'dark'
    }

    // Change the data-theme
    document.documentElement.setAttribute('data-theme', change)

    /**
     * Update our local storage if a change has occurred
     */
    localStorage.theme = change
  })
}

export const useTheme = () => useContext(ThemeContext)
