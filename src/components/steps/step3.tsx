import {
  type PropFunction,
  component$,
  useVisibleTask$,
  $,
} from '@builder.io/qwik'
import { timeline, stagger } from 'motion'
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
        <ul class="capcom-platforms flex flex-wrap justify-center gap-5 max-w-[650px] opacity-0">
          {PLATFORMS.map((platform) => (
            <li
              key={platform.slug}
              style={{ backgroundColor: platform.color }}
              class={{
                'outline outline-5 outline-capcomBlue cursor-not-allowed opacity-1':
                  ctx.platform === platform.slug,
                'cursor-pointer opacity-40': ctx.platform !== platform.slug,
                'px-6 py-3 text-capcomWhite': true,
              }}
              onClick$={() => (ctx.platform = platform.slug)}
            >
              {renderConsoleIcon(platform.slug)}
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

function renderConsoleIcon(platform: string) {
  switch (platform) {
    case 'switch':
      return <SVGManager svg="switch" />
    case 'xbox-one':
      return <SVGManager svg="xbox-one" />
    case 'xbox-series':
      return <SVGManager svg="xbox-series" />
    case 'ps5':
      return <SVGManager svg="ps5" />
    case 'ps4':
      return <SVGManager svg="ps4" />
    case 'steam':
      return <SVGManager svg="steam" />
    default:
      return null
  }
}
