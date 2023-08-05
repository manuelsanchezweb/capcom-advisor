import {
  type PropFunction,
  component$,
  useVisibleTask$,
  $,
} from '@builder.io/qwik'
import { timeline, stagger, type TimelineDefinition } from 'motion'
import { useGlobalState } from '~/ctx/ctx'
import { BackButton } from '../back-button/back-button'
import { useNavigate } from '@builder.io/qwik-city'

export const Step1 = component$(
  ({ onNextStep }: { onNextStep: PropFunction<() => void> }) => {
    const ctx = useGlobalState()
    const nav = useNavigate()

    useVisibleTask$(() => {
      const button = document.querySelector('.btn--next')
      const logo = document.querySelector('.capcom-logo') as HTMLElement
      const title = document.querySelector('h2')
      const paragraphs = document.querySelectorAll('p')
      const name = document.querySelectorAll('.capcom-name')
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
        [name, { opacity: [0, 1], y: [-50, 0] }, { at: 1.1 }],
        [button, { opacity: [0, 1], y: [-50, 0] }, { at: 1.3 }],
        [back, { opacity: [0, 1], y: [-50, 0] }, { at: 1.5 }],
        [navigation, { opacity: [0, 1], y: [-50, 0] }, { at: 1.7 }],
      ]

      timeline(sequence, {})
    })

    return (
      <>
        <BackButton onClick={$(() => nav('/'))} />
        <h2 class="text-xl md:text-3xl font-bold opacity-0">
          Welcome to the Capcom Advisor
        </h2>
        <p class="text-md md:text-lg opacity-0">
          A cool way to help you find your new game!
        </p>
        <p class="text-md md:text-lg opacity-0">But first things first...</p>
        <div class="capcom-name flex gap-4 flex-col items-start opacity-0">
          <label for="name">Your name:</label>
          <input
            class="border border-black rounded-sm py-3 px-4 text-black"
            placeholder="Max Mustermann"
            type="text"
            name="name"
            id="name"
            onInput$={(e: InputEvent & { target: HTMLInputElement }) => {
              ctx.name = e.target.value
            }}
            value={ctx.name}
          />
          <button
            disabled={!ctx.name}
            class="btn btn--border btn--next disabled:opacity-50 disabled:cursor-not-allowed opacity-0 flex justify-center mx-auto"
            onClick$={() => onNextStep()}
          >
            Next step
          </button>
        </div>
      </>
    )
  }
)
