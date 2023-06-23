import { component$, useVisibleTask$ } from '@builder.io/qwik'
import { useNavigate } from '@builder.io/qwik-city'
import Splide from '@splidejs/splide'
import { SVGManager } from '~/components/svg/svg-manager'
import { useSplide } from '~/hooks/useSplide'

export default component$(() => {
  const numberOfSlides = useSplide()
  const nav = useNavigate()

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
            {/* // Monster Hunter Rise */}
            <li class="splide__slide h-full w-full">
              {' '}
              <a
                class="cursor-pointer group w-full h-full flex transition-all duration-300"
                href="https://www.monsterhunter.com/rise-sunbreak/platform.html"
                title='Check "Monster Hunter Rise" Game Page'
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="overlay absolute top-0 left-0 w-full h-full bg-black/50 group-hover:bg-transparent z-10"></div>
                <img
                  height={375}
                  width={820}
                  src="../img/lgMonsterHunter.png"
                  alt="MonsterHunter"
                />
              </a>
            </li>
            {/* // DMC  */}
            <li class="splide__slide h-full w-full">
              <a
                class="cursor-pointer group w-full h-full flex transition-all duration-300"
                href="https://www.devilmaycry.com/5/"
                title='Check "Devil May Cry 5 Special Edition" Game Page'
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="overlay absolute top-0 left-0 w-full h-full bg-black/50 group-hover:bg-transparent z-10"></div>
                <img
                  height={375}
                  width={820}
                  src="../img/lgDMC.png"
                  alt="DMC"
                />
              </a>
            </li>
            {/* // RE4  */}
            <li class="splide__slide h-full w-full">
              {' '}
              <a
                class="cursor-pointer group w-full h-full flex transition-all duration-300"
                href="https://www.residentevil.com/re4/en-uk/"
                title='Check "Resident Evil 4" Game Page'
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="overlay absolute top-0 left-0 w-full h-full bg-black/50 group-hover:bg-transparent z-10"></div>
                <img
                  height={375}
                  width={820}
                  src="../img/lgRE4.png"
                  alt="RE4"
                />
              </a>
            </li>
            {/* // SF6 */}
            <li class="splide__slide h-full w-full">
              {' '}
              <a
                class="cursor-pointer group w-full h-full flex transition-all duration-300"
                href="https://www.streetfighter.com/6/en-uk"
                title='Check "Street Fighter 6" Game Page'
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="overlay absolute top-0 left-0 w-full h-full bg-black/50 group-hover:bg-transparent z-10"></div>
                <img
                  height={375}
                  width={820}
                  src="../img/lgSF6.png"
                  alt="SF6"
                />
              </a>
            </li>
            {/* // Exoprimal  */}
            <li class="splide__slide h-full w-full">
              {' '}
              <a
                class="cursor-pointer group w-full h-full flex transition-all duration-300"
                href="https://www.exoprimal.com/en-uk/"
                title='Check "Exoprimal" Game Page'
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="overlay absolute top-0 left-0 w-full h-full bg-black/50 group-hover:bg-transparent z-10"></div>
                <img
                  height={375}
                  width={820}
                  src="../img/lgExoprimal.png"
                  alt="Exoprimal"
                />
              </a>
            </li>
            {/* // Megaman  */}
            <li class="splide__slide h-full w-full">
              {' '}
              <a
                class="cursor-pointer group w-full h-full flex transition-all duration-300"
                href="https://megaman.capcom.com/"
                title='Check "Megaman Zero/ZX" Game Page'
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="overlay absolute top-0 left-0 w-full h-full bg-black/50 group-hover:bg-transparent z-10"></div>
                <img
                  height={375}
                  width={820}
                  src="../img/lgMegaman.png"
                  alt="Megaman"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
})
