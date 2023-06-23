import {
  type PropFunction,
  component$,
  useVisibleTask$,
  $,
} from '@builder.io/qwik'
import { timeline, stagger } from 'motion'
import { useGlobalState } from '~/ctx/ctx'
import { BackButton } from '../back-button/back-button'
import { useNavigate } from '@builder.io/qwik-city'

export const Step1 = component$(
  ({ onNextStep }: { onNextStep: PropFunction<() => void> }) => {
    const ctx = useGlobalState()
    const nav = useNavigate()

    useVisibleTask$(() => {
      const button = document.querySelector('.btn--next')
      const logo = document.querySelector('.capcom-logo')
      const title = document.querySelector('h2')
      const paragraphs = document.querySelectorAll('p')
      const name = document.querySelectorAll('.capcom-name')
      const back = document.querySelector('.btn--back')
      const navigation = document.querySelector('.capcom-nav')
      if (!title || !paragraphs || !button) return

      const sequence: any = [
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
          A pretty unconventional way to send an unsolicited application for a
          job.
        </p>
        <p class="text-md md:text-lg opacity-0">
          But so it is, I am Manuel, and I studied to be a professional
          translator. At the end, I ended up translating{' '}
          <a
            target="_blank"
            rel="nofollow noopener"
            href="https://www.amazon.es/Terminal-Mike-Powelz/dp/1507195796/ref=sr_1_fkmr2_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2V8K58RN1RTZ9&keywords=terminal+mike+powell&qid=1687415499&sprefix=terminal+mike+powel%2Caps%2C93&sr=8-1-fkmr2"
          >
            a German best seller into Spanish
          </a>{' '}
          and working as{' '}
          <a
            target="_blank"
            rel="noopener nofollow"
            href="https://meltingelements.com/"
          >
            a Content Manager
          </a>{' '}
          when I first got to Hamburg.
        </p>
        <p class="text-md md:text-lg opacity-0">
          But interviews should go both sides, right?
        </p>
        <div class="capcom-name flex gap-4 flex-col items-start opacity-0">
          <label for="name">Your name:</label>
          <input
            class="border border-black rounded-sm py-3 px-6"
            placeholder="Max Mustermann"
            type="text"
            name="name"
            id="name"
            onInput$={(e: InputEvent & { target: HTMLInputElement }) => {
              ctx.name = e.target.value
            }}
            value={ctx.name}
          />
        </div>
        <button
          disabled={!ctx.name}
          class="btn btn--border btn--next disabled:opacity-50 disabled:cursor-not-allowed opacity-0"
          onClick$={() => onNextStep()}
        >
          Next step
        </button>
      </>
    )
  }
)
