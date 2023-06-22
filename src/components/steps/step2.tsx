import {
  type PropFunction,
  component$,
  useVisibleTask$,
} from '@builder.io/qwik'
import { timeline, stagger } from 'motion'
import { useGlobalState } from '~/ctx/ctx'

const GENRES = [
  'Action',
  'Adventure',
  'RPG',
  'Strategy',
  'Simulation',
  'Sports',
]

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
      const logo = document.querySelector('.capcom-logo')
      const title = document.querySelector('h2')
      const paragraphs = document.querySelectorAll('p')
      const button = document.querySelector('.btn--next')
      const genres = document.querySelectorAll('.capcom-genres')
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
        [genres, { opacity: [0, 1], y: [-50, 0] }, { at: 1.1 }],
        [button, { opacity: [0, 1], y: [-50, 0] }, { at: 1.3 }],
        [back, { opacity: [0, 1], y: [-50, 0] }, { at: 1.5 }],
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
          What is your favourite genre?
        </h2>
        <p class="text-md md:text-xl opacity-0">
          When I was a child, my sister used to challenge me to Street Fighter 3
          in the arcade machine we had in a bar close to our place.
        </p>
        <p class="text-md md:text-xl opacity-0">
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
        <p class="text-md md:text-xl opacity-0">
          But again, where were we... and yeah, your favorite genre?
        </p>
        <ul class="capcom-genres flex flex-wrap gap-5 max-w-[350px] opacity-0">
          {GENRES.map((genre) => (
            <li
              class={{
                '!bg-capcomBlue text-capcomWhite cursor-not-allowed':
                  ctx.genre === genre,
                'cursor-pointer': ctx.genre !== genre,
                'px-6 py-3 border border-capcomBlue bg-capcomYellow hover:text-capcomWhite hover:bg-capcomBlue':
                  true,
              }}
              onClick$={() => (ctx.genre = genre)}
            >
              {genre}
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
