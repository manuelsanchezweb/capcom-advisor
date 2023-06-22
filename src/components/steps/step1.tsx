import {
  type PropFunction,
  component$,
  useVisibleTask$,
} from '@builder.io/qwik'
import { timeline, stagger } from 'motion'

export const Step1 = component$(
  ({
    onNextStep,
    handlePreviousStep,
  }: {
    onNextStep: PropFunction<() => void>
    handlePreviousStep: PropFunction<() => void>
  }) => {
    useVisibleTask$(() => {
      const logo = document.querySelector('.capcom-logo')
      const title = document.querySelector('h2')
      const paragraphs = document.querySelectorAll('p')
      const button = document.querySelector('.btn--next')
      const back = document.querySelector('.btn--back')
      if (!title || !paragraphs || !button) return

      const sequence: any = [
        [logo, { opacity: [0, 1], y: [-50, 0] }, { at: 0.1 }],
        [title, { opacity: [0, 1], y: [-50, 0] }, { at: 0.3 }],
        [
          paragraphs,
          { opacity: [0, 1], y: [-50, 0] },
          { duration: 0.3, delay: stagger(0.2) },
        ],
        [button, { opacity: [0, 1], y: [-50, 0] }, { at: 1.1 }],
        [back, { opacity: [0, 1], y: [-50, 0] }, { at: 1.3 }],
      ]

      timeline(sequence, {})
    })

    return (
      <>
        <button
          class="btn btn--border p-0 text-capcomBlue btn--back opacity-0 absolute top-12 left-0 rounded-md flex justify-center items-center hover:scale-105 focus:scale-105 transition-transform"
          onClick$={() => handlePreviousStep()}
        >
          <svg
            class="bee bee-icons text-capcomBlue"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0673 19.1347L7.93266 12L15.0673 4.86534"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <h2 class="text-xl md:text-3xl font-bold opacity-0">
          Welcome to the Capcom Advisor
        </h2>
        <p class="text-md md:text-xl opacity-0">
          A pretty unconventional way to send an unsolicited application for a
          job.
        </p>
        <p class="text-md md:text-xl opacity-0">
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
        <p class="text-md md:text-xl opacity-0">
          But interviews should go both sides, right?
        </p>
        <button
          class="btn btn--border btn--next opacity-0"
          onClick$={() => onNextStep()}
        >
          Next step
        </button>
      </>
    )
  }
)
