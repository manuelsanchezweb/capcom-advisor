import {
  type PropFunction,
  component$,
  useVisibleTask$,
  $,
} from '@builder.io/qwik'
import { timeline, stagger, type TimelineDefinition } from 'motion'
// import { getGames } from '~/api/getGames'
import { URL } from '~/constants/constants'
import { useGlobalState } from '~/ctx/ctx'
import { BackButton } from '../back-button/back-button'
import { useNavigate } from '@builder.io/qwik-city'
// import { Game } from '~/types/types'

export const Step4 = component$(
  ({ onEndApp }: { onEndApp: PropFunction<() => void> }) => {
    const ctx = useGlobalState()
    const nav = useNavigate()
    const { games } = ctx

    useVisibleTask$(() => {
      const logo = document.querySelector('.capcom-logo') as HTMLElement
      const title = document.querySelector('h2')
      const options = document.querySelectorAll(
        '.capcom-options'
      ) as NodeListOf<HTMLElement>
      const buttons = document.querySelector('.capcom-buttons')
      const navigation = document.querySelector('.capcom-nav') as HTMLElement
      const back = document.querySelector('.btn--back') as HTMLButtonElement
      if (!title || !buttons || !options) return

      const sequence: TimelineDefinition = [
        [logo, { opacity: [0, 1], y: [-50, 0] }, { at: 0.1 }],
        [title, { opacity: [0, 1], y: [-50, 0] }, { at: 0.3 }],
        [
          options,
          { opacity: [0, 1], y: [-50, 0] },
          { duration: 0.3, delay: stagger(0.2) },
        ],
        [buttons, { opacity: [0, 1], y: [-50, 0] }, { at: 1 }],
        [navigation, { opacity: [0, 1], y: [-50, 0] }, { at: 1.2 }],
        [back, { opacity: [0, 1], y: [-50, 0] }, { at: 1.4 }],
      ]

      timeline(sequence, {})
    })

    return (
      <>
        <BackButton onClick={$(() => nav('/'))} text="Home" hasIcon={false} />
        <h2 class="text-xl md:text-3xl font-bold opacity-0">
          This is what you are looking for:
        </h2>
        <div class="capcom-options opacity-0">
          {games.length > 0 ? (
            <ul class="w-full">
              {games.map((game) => (
                <li
                  key={game.id}
                  class=" flex flex-col-reverse md:flex-row gap-4 md:gap-10 my-8"
                >
                  <figure>
                    <a
                      target="_blank"
                      rel="noopener nofollow"
                      href={game.urlOfficial}
                      title={`Check page of ${game.name}`}
                      class="group"
                    >
                      <picture class="flex overflow-hidden">
                        <img
                          src={`${URL}${game.assets.imgSmall.url}`}
                          alt={game.name}
                          class="md:min-w-[350px] group-hover:scale-115 group-focus:scale-115 transition-transform"
                          height={300}
                          width={500}
                        />
                      </picture>
                    </a>
                    <figcaption class="text-left text-xs my-1">
                      Image from{' '}
                      <a
                        target="_blank"
                        rel="nofollow noopener"
                        href={game.assets.imgSmall.copyrightUrl}
                      >
                        official page
                      </a>
                      .
                    </figcaption>
                  </figure>
                  <div class="flex flex-col gap-4 md:items-start md:text-left">
                    <h3 class="text-2xl font-bold">{game.name}</h3>
                    <p class="text-lg line-clamp-4">{game.description}</p>
                    <a
                      class="btn btn--border"
                      target="_blank"
                      rel="nofollow noopener"
                      title={`See official page of ${game.name}`}
                      href={game.urlOfficial}
                    >
                      Visit official page
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              We do not have a game for your search criteria, try sth else!{' '}
            </p>
          )}
        </div>
        <div class="capcom-buttons flex flex-col md:flex-row gap-6 justify-between items-center">
          <button class="btn btn--border btn--next" onClick$={() => onEndApp()}>
            Launch the advisor again
          </button>
          <a href="/latest-games/">See latest games</a>
        </div>
      </>
    )
  }
)
