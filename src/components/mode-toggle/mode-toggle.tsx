import { component$, useVisibleTask$ } from '@builder.io/qwik'
import { IconMoon, IconSun } from '../svg/icons/icons'
import { useTheme } from '~/ctx/theme'

export const ModeToggler = component$(() => {
  const theme = useTheme()

  useVisibleTask$(() => {
    const themeToggle = document.querySelector('#toggler') as HTMLButtonElement

    function switchTheme() {
      if (document.documentElement.getAttribute('data-theme') == 'light') {
        theme.theme = 'dark'
      } else {
        theme.theme = 'light'
      }
    }

    themeToggle.addEventListener('click', switchTheme, false)
  })

  return (
    <button id="toggler" aria-label="Switch Mode" class="btn--icon">
      {theme.theme == 'light' ? (
        <IconMoon classCustom="text-capcomBlue h-6 w-6" />
      ) : (
        <IconSun classCustom="text-capcomBlue h-6 w-6" />
      )}
    </button>
  )
})
