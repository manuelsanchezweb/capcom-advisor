import { component$ } from '@builder.io/qwik'

export const CD = component$(() => {
  return (
    <>
      <a href="/advisor" class="capcom-cd opacity-0" title="Go to the advisor">
        <div class="cd w-[280px] h-[280px] md:w-[450px] md:h-[450px]"></div>
      </a>
    </>
  )
})
