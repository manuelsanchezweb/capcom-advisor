import { component$, Slot } from '@builder.io/qwik'
import './splide.min.css'

export default component$(() => {
  return (
    <div class="mx-auto">
      <Slot />
    </div>
  )
})
