import { $, component$, useStore, useVisibleTask$ } from '@builder.io/qwik'
import cdAll from '../../assets/cd/cdAll.png'
import cdRE4 from '../../assets/cd/cdRE4.png'
import cdSF6 from '../../assets/cd/cdSF6.png'
import cdMonsterHunter from '../../assets/cd/cdMonsterHunter.png'
import cdDMC from '../../assets/cd/cdDMC.png'

const cdImages = [
  cdAll,
  cdRE4,
  cdRE4,
  cdSF6,
  cdSF6,
  cdMonsterHunter,
  cdMonsterHunter,
  cdDMC,
  cdDMC,
  cdAll,
]

const rotationSteps = [0, 0, 5000, 5000, 0, 0, 5000, 5000, 0, 0, 720]

export const CD = component$(() => {
  const CDStore = useStore({
    rotation: 0,
    image: cdAll,
    paused: false,
    finished: false,
  })

  const delay = $((time: number) => new Promise((res) => setTimeout(res, time)))

  useVisibleTask$(({ track }) => {
    track(CDStore)
    track(() => rotationSteps)
    const cdElement = document.querySelector('.capcom-cd') as HTMLElement

    if (!cdElement) return
    if (CDStore.finished === true) return

    delay(800).then(() => {
      if (CDStore.paused === false) {
        CDStore.rotation = (CDStore.rotation + 1) % rotationSteps.length
        CDStore.image = cdImages[CDStore.rotation % cdImages.length]
      }

      if (CDStore.rotation === rotationSteps.length - 1) CDStore.finished = true
    })
  })

  const handleMouseEnter = $(() => {
    CDStore.paused = true
  })

  const handleMouseLeave = $(() => {
    CDStore.paused = false
  })

  return (
    <a
      onMouseEnter$={handleMouseEnter}
      onMouseLeave$={handleMouseLeave}
      href="/advisor"
      class="capcom-cd opacity-0"
      title="Go to the advisor"
    >
      <div
        style={{
          backgroundImage: `url(${CDStore.image})`,
          backgroundSize: 'cover',
          cursor: 'pointer',
        }}
        class="cd w-[280px] h-[280px] md:w-[450px] md:h-[450px]"
      ></div>
    </a>
  )
})
