import {
  type PropFunction,
  component$,
  useVisibleTask$,
} from '@builder.io/qwik'
import { timeline, stagger } from 'motion'

export const Step3 = component$(
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
      const platforms = document.querySelectorAll('.capcom-platforms')
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
        [platforms, { opacity: [0, 1], y: [-50, 0] }, { at: 1.1 }],
        [button, { opacity: [0, 1], y: [-50, 0] }, { at: 1.3 }],
        [back, { opacity: [0, 1], y: [-50, 0] }, { at: 1.5 }],
      ]

      timeline(sequence, {})
    })

    return (
      <>
        {' '}
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
          What are you using to play these days?
        </h2>
        <p class="text-md md:text-xl opacity-0">
          I had been always a Nintendo guy until I got Xbox 360 and Xbox One.
          But recently I’ve been playing Resident Evil 4 Remake in PS5.
        </p>
        <p class="text-md md:text-xl opacity-0">
          Since 2021 I decided to work part-time in my current job as a Frontend
          Team Lead and take the rest of the time to create side projects, like
          creating content for those interested in web development in Spanish on{' '}
          <a
            target="_blank"
            title="YouTube Channel"
            href="https://www.youtube.com/@manuelsanchezweb"
          >
            YouTube
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            rel="nofollow noopener"
            href="https://www.udemy.com/user/manuel-sanchez-324/"
          >
            Udemy
          </a>
          . I can remain creative and updated with the latest technologies.
        </p>
        <p class="text-md md:text-xl opacity-0">
          Also that gives me more quality time to spend with friends, family,
          doing kickboxing and for doing non-productive stuff.
        </p>
        <p class="text-md md:text-xl opacity-0">
          You know now how I spend my time, but... how do you usually chill?
        </p>
        <ul class="capcom-platforms">
          <li>
            <input
              checked
              type="radio"
              id="ps5"
              name="fav_language"
              value="ps5"
            />
            <label for="ps5">ps5</label>
          </li>
          <li>
            {' '}
            <input
              type="radio"
              id="switch"
              name="fav_language"
              value="switch"
            />
            <label for="switch">switch</label>
          </li>
          <li>
            <input
              type="radio"
              id="xbox-one"
              name="fav_language"
              value="xbox-one"
            />
            <label for="xbox-one">xbox-one</label>
          </li>
        </ul>
        <button class="btn btn--border btn--next" onClick$={() => onNextStep()}>
          Next step
        </button>
      </>
    )
  }
)
