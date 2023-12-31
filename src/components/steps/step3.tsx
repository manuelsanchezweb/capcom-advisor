import {
  type PropFunction,
  component$,
  useVisibleTask$,
  $,
} from '@builder.io/qwik'
import { timeline, stagger, type TimelineDefinition } from 'motion'
import { useGlobalState } from '~/ctx/ctx'
import { BackButton } from '../back-button/back-button'
import { PLATFORMS } from '~/constants/constants'
import { SVGManager } from '../svg/svg-manager'

export const Step3 = component$(
  ({
    onNextStep,
    handlePreviousStep,
  }: {
    onNextStep: PropFunction<() => void>
    handlePreviousStep: PropFunction<() => void>
  }) => {
    const ctx = useGlobalState()

    useVisibleTask$(() => {
      const logo = document.querySelector('.capcom-logo') as HTMLElement
      const title = document.querySelector('h2')
      const paragraphs = document.querySelectorAll('p')
      const platforms = document.querySelectorAll('.capcom-platforms')
      const button = document.querySelector('.btn--next') as HTMLButtonElement
      const back = document.querySelector('.btn--back') as HTMLButtonElement
      const navigation = document.querySelector('.capcom-nav') as HTMLElement
      if (!title || !paragraphs || !button) return

      const sequence: TimelineDefinition = [
        [logo, { opacity: [0, 1], y: [-50, 0] }, { at: 0.1 }],
        [title, { opacity: [0, 1], y: [-50, 0] }, { at: 0.3 }],
        [
          paragraphs,
          { opacity: [0, 1], y: [-50, 0] },
          { duration: 0.3, delay: stagger(0.2) },
        ],
        [platforms, { opacity: [0, 1], y: [-50, 0] }, { at: 1.1 }],
        [button, { opacity: [0, 1], y: [-50, 0] }, { at: 1.3 }],
        [back, { opacity: [0, 1], y: [-50, 0] }, { at: 1.5 }],
        [navigation, { opacity: [0, 1], y: [-50, 0] }, { at: 1.7 }],
      ]

      timeline(sequence, {})
    })

    return (
      <>
        <BackButton onClick={$(() => handlePreviousStep())} />
        <h2 class="text-xl md:text-3xl font-bold opacity-0">
          What are you using to play these days?
        </h2>
        <p class="text-md md:text-lg opacity-0">
          I had been always a Nintendo guy until I got Xbox 360 and Xbox One.
          But recently I’ve been playing Resident Evil 4 Remake in PS5.
        </p>
        <p class="text-md md:text-lg opacity-0">
          You know now how I spend my time, but... how do you usually chill,{' '}
          {ctx.name}?
        </p>
        <ul class="capcom-platforms flex flex-wrap justify-center gap-5 max-w-[650px] opacity-0">
          {PLATFORMS.map((platform) => (
            <li
              key={platform.slug}
              style={{ backgroundColor: platform.color }}
              class={{
                'outline outline-5 outline-capcomBlue cursor-not-allowed opacity-1':
                  ctx.platform === platform.slug,
                'cursor-pointer opacity-40': ctx.platform !== platform.slug,
                'px-6 py-3 text-capcomWhite max-w-[125px] md:max-w-none': true,
              }}
              onClick$={() => (ctx.platform = platform.slug)}
            >
              <SVGManager
                classCustom="max-w-[75px] md:max-w-none coolIcon"
                svg={platform.slug}
              />
            </li>
          ))}
        </ul>
        <button class="btn btn--border btn--next" onClick$={() => onNextStep()}>
          Next step
        </button>
      </>
    )
  }
)
