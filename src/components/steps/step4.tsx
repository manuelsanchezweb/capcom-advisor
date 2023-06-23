import {
  type PropFunction,
  component$,
  useVisibleTask$,
  $,
} from '@builder.io/qwik'
import { timeline, stagger } from 'motion'
import { BackButton } from '../back-button/back-button'

export const Step4 = component$(
  ({
    onEndApp,
    handlePreviousStep,
  }: {
    onEndApp: PropFunction<() => void>
    handlePreviousStep: PropFunction<() => void>
  }) => {
    useVisibleTask$(() => {
      const logo = document.querySelector('.capcom-logo')
      const title = document.querySelector('h2')
      const paragraphs = document.querySelectorAll('p')
      const platforms = document.querySelectorAll('.capcom-platforms')
      const buttons = document.querySelector('.capcom-options')
      const back = document.querySelector('.btn--back')
      if (!title || !paragraphs || !buttons) return

      const sequence: any = [
        [logo, { opacity: [0, 1], y: [-50, 0] }, { at: 0.1 }],
        [title, { opacity: [0, 1], y: [-50, 0] }, { at: 0.3 }],
        [
          paragraphs,
          { opacity: [0, 1], y: [-50, 0] },
          { duration: 0.3, delay: stagger(0.2) },
        ],
        [platforms, { opacity: [0, 1], y: [-50, 0] }, { at: 1.1 }],
        [buttons, { opacity: [0, 1], y: [-50, 0] }, { at: 1.3 }],
        [back, { opacity: [0, 1], y: [-50, 0] }, { at: 1.5 }],
      ]

      timeline(sequence, {})
    })

    return (
      <>
        <BackButton onClick={$(() => handlePreviousStep())} />
        <h2 class="text-xl md:text-3xl font-bold opacity-0">
          This is what you are looking for:
        </h2>
        <p class="text-md md:text-xl opacity-0">
          Resident Evil 4 Remake is coming in 2022, and I’m so excited about...
        </p>
        <div class="capcom-options flex flex-col md:flex-row gap-6 justify-between items-center">
          <button class="btn btn--border btn--next" onClick$={() => onEndApp()}>
            Launch the advisor again
          </button>
          <a href="/latest-games/">See latest games</a>
        </div>
      </>
    )
  }
)
