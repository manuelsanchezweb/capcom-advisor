import { JSXNode, component$ } from '@builder.io/qwik'
import { LogoCapcom } from './logos/logos'
import { IconGitHub, IconLinkedIn, IconYouTube } from './icons/icons'

type SVGType = 'capcom' | 'github' | 'linkedin' | 'youtube'

export const SVGManager = component$<{ svg: SVGType; classCustom?: string }>(
  (props): JSXNode => {
    const { svg, classCustom } = props

    switch (svg) {
      case 'capcom':
        return <LogoCapcom classCustom={classCustom} />
      case 'github':
        return <IconGitHub classCustom={classCustom} />
      case 'linkedin':
        return <IconLinkedIn classCustom={classCustom} />
      case 'youtube':
        return <IconYouTube classCustom={classCustom} />

      default:
        // It should never get here if you are using TypeScript correctly.
        throw new Error(`Invalid svg type: ${svg}`)
    }
  }
)
