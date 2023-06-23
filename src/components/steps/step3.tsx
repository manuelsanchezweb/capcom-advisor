import {
  type PropFunction,
  component$,
  useVisibleTask$,
  $,
} from '@builder.io/qwik'
import { timeline, stagger } from 'motion'
import { useGlobalState } from '~/ctx/ctx'
import { BackButton } from '../back-button/back-button'

const PLATFORMS = [
  'PC',
  'PS4',
  'PS5',
  'Xbox One',
  'Xbox Series X',
  'Nintendo Switch',
]

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
        <BackButton onClick={$(() => handlePreviousStep())} />
        <h2 class="text-xl md:text-3xl font-bold opacity-0">
          What are you using to play these days?
        </h2>
        <p class="text-md md:text-lg opacity-0">
          I had been always a Nintendo guy until I got Xbox 360 and Xbox One.
          But recently I’ve been playing Resident Evil 4 Remake in PS5.
        </p>
        <p class="text-md md:text-lg opacity-0">
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
        <p class="text-md md:text-lg opacity-0">
          Also that gives me more quality time to spend with friends, family,
          doing kickboxing and for doing non-productive stuff.
        </p>
        <p class="text-md md:text-lg opacity-0">
          You know now how I spend my time, but... how do you usually chill?
        </p>
        <ul class="capcom-platforms flex flex-wrap gap-5 max-w-[350px] opacity-0">
          {PLATFORMS.map((platform) => (
            <li
              class={{
                '!bg-capcomBlue text-capcomWhite cursor-not-allowed':
                  ctx.platform === platform,
                'cursor-pointer': ctx.platform !== platform,
                'px-6 py-3 border border-capcomBlue bg-capcomYellow hover:text-capcomWhite hover:bg-capcomBlue':
                  true,
              }}
              onClick$={() => (ctx.platform = platform)}
            >
              {platform}
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
