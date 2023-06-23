import {
  type PropFunction,
  component$,
  useVisibleTask$,
  $,
} from '@builder.io/qwik'
import { timeline, stagger, type TimelineDefinition } from 'motion'
import { useGlobalState } from '~/ctx/ctx'
import { BackButton } from '../back-button/back-button'
import { GENRES } from '~/constants/constants'

export const Step2 = component$(
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
      const button = document.querySelector('.btn--next')
      const genres = document.querySelectorAll('.capcom-genres')
      const back = document.querySelector('.btn--back') as HTMLButtonElement
      if (!title || !paragraphs || !button) return

      const sequence: TimelineDefinition = [
        [logo, { opacity: [0, 1], y: [-50, 0] }, { at: 0.1 }],
        [title, { opacity: [0, 1], y: [-50, 0] }, { at: 0.3 }],
        [
          paragraphs,
          { opacity: [0, 1], y: [-50, 0] },
          { duration: 0.3, delay: stagger(0.2) },
        ],
        [genres, { opacity: [0, 1], y: [-50, 0] }, { at: 1.1 }],
        [button, { opacity: [0, 1], y: [-50, 0] }, { at: 1.3 }],
        [back, { opacity: [0, 1], y: [-50, 0] }, { at: 1.5 }],
      ]

      timeline(sequence, {})
    })

    return (
      <>
        <BackButton onClick={$(() => handlePreviousStep())} />

        <h2 class="text-xl md:text-3xl font-bold opacity-0">
          What is your favourite genre, {ctx.name}?
        </h2>
        <p class="text-md md:text-lg opacity-0">
          When I was a child, my sister used to challenge me to Street Fighter 3
          in the arcade machine we had in a bar close to our place.
        </p>
        <p class="text-md md:text-lg opacity-0">
          That is why it motivated me so much{' '}
          <a
            target="_blank"
            rel="nofollow noopener"
            href="https://www.manu-sanchez.com/specialities/coding.html"
          >
            to learn to code
          </a>{' '}
          and create games on my own and cool pages like this one. I have
          created some{' '}
          <a
            rel="nofollow noopener"
            href="https://pizzalegends-rpg.netlify.app/"
          >
            small games following some tutorials
          </a>
          , but of course nothing AAA.
        </p>
        <p class="text-md md:text-lg opacity-0">
          But again, where were we... and yeah, your favorite genre?
        </p>
        <ul class="capcom-genres flex flex-wrap justify-start gap-5 max-w-[550px] opacity-0 border border-capcomBlack p-7">
          {GENRES.map((genre) => (
            <li
              key={genre.id}
              class={{
                '!bg-capcomBlue text-capcomWhite cursor-not-allowed':
                  ctx.genre === genre.slug,
                'cursor-pointer': ctx.genre !== genre.slug,
                'px-6 py-3 border border-capcomBlue bg-capcomYellow hover:text-capcomWhite hover:bg-capcomBlue':
                  true,
              }}
              onClick$={() => (ctx.genre = genre.slug)}
            >
              {genre.name}
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
