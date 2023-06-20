import { component$, Slot } from '@builder.io/qwik'

export default component$(() => {
  return (
    <div class="max-w-[1600px] mx-auto">
      <Slot />
    </div>
  )
})
