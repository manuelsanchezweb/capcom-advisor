import { component$, useVisibleTask$ } from '@builder.io/qwik'
import Splide from '@splidejs/splide'

export default component$(() => {
  useVisibleTask$(() => {
    // Options of the splide
    const splide = new Splide('.splide').mount()

    return () => {
      // Cleanup
    }
  })

  return (
    <section class="splide" aria-label="Splide Basic HTML Example">
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">Slide 01</li>
          <li class="splide__slide">Slide 02</li>
          <li class="splide__slide">Slide 03</li>
          <li class="splide__slide">Slide 04</li>
          <li class="splide__slide">Slide 05</li>
          <li class="splide__slide">Slide 06</li>
        </ul>
      </div>
    </section>
  )
})
