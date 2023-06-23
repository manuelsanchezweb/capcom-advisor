import { component$, useVisibleTask$ } from '@builder.io/qwik'
import {
  type DocumentHead,
  useNavigate,
  routeLoader$,
} from '@builder.io/qwik-city'
import Splide from '@splidejs/splide'
import { getGames } from '~/api/getGames'
import { SVGManager } from '~/components/svg/svg-manager'
import { URL } from '~/constants/constants'
import { useSplide } from '~/hooks/useSplide'

export const useGames = routeLoader$(async () => {
  try {
    return await getGames()
  } catch (error) {
    console.error('An error occurred while fetching games!', error)
    return []
  }
})

export default component$(() => {
  const numberOfSlides = useSplide()
  const nav = useNavigate()
  const { value: games } = useGames()

  useVisibleTask$(
    ({ track }) => {
      // Options of the splide
      track(numberOfSlides)

      const options = {
        type: 'loop',
        perMove: 1,
        perPage: numberOfSlides.value,
        loop: true,
        autoplay: true,
        updateOnMove: true,
        drag: true,
        interval: 3000,
        pagination: false,
      }
      setTimeout(() => {
        const splide = new Splide('.splide', options).mount()

        splide.on('resize', function () {
          splide.destroy()
          const newSplide = new Splide('.splide', options).mount()
          console.log('When resizing, a new splide will be created:', newSplide)
        })
      }, 50)
    },
    { strategy: 'intersection-observer' }
  )

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
      />

      <section
        class="splide relative min-h-screen max-w-screen overflow-hidden"
        aria-label="Latest Capcom Games"
      >
        <button
          class="btn btn--border absolute top-12 left-4 z-10 rounded-md flex justify-center items-center hover:scale-105 focus:scale-105 transition-transform"
          onClick$={() => nav('/')}
        >
          Home
        </button>
        <SVGManager
          svg="capcom"
          classCustom="absolute z-10 top-32 lg:top-12 left-1/2 transform -translate-x-1/2 w-[230px] md:w-[330px] h-auto"
        />
        <div class="splide__track !overflow-visible">
          <ul class="splide__list h-screen">
            {games.map((game) => (
              <li class="splide__slide h-full w-full">
                <a
                  class="cursor-pointer group w-full h-full flex transition-all duration-300"
                  href={game.urlOfficial}
                  title={`Check "${game.name}" Game Page`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="overlay absolute top-0 left-0 w-full h-full bg-black/50 group-hover:bg-transparent z-10"></div>
                  <img
                    height={375}
                    width={820}
                    src={`${URL}${game.assets.imgBig.url}`}
                    alt={game.name}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Unofficial Capcom Advisor',
  meta: [
    {
      name: 'description',
      content: 'Find out which game is for you with this cool advisor!',
    },
    {
      name: 'keywords',
      content: 'capcom, game, steam, re4, monster hunter, Qwik',
    },
    {
      name: 'author',
      content: 'Manuel Sanchez',
    },
    {
      property: 'og:title',
      content: 'Unofficial Capcom Advisor',
    },
    {
      property: 'og:description',
      content: 'Find out which game is for you with this cool advisor!',
    },
    {
      property: 'og:image',
      content: 'https://capcom.vercel.app/thumbnail.png',
    },
    {
      property: 'og:url',
      content: 'https://capcom.vercel.app/',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@manuelsandoble',
    },
    {
      name: 'twitter:title',
      content: 'Unofficial Capcom Advisor',
    },
    {
      name: 'twitter:description',
      content: 'Find out which game is for you with this cool advisor!',
    },
    {
      name: 'twitter:image',
      content: 'https://capcom.vercel.app/thumbnail.png',
    },
  ],
}
