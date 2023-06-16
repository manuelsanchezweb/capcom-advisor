import { Bee } from '@bee-icons/qwik'
import { component$ } from '@builder.io/qwik'
import { DocumentHead, Link } from '@builder.io/qwik-city'
import { SVGManager } from '~/components/svg/svg-manager'

export default component$(() => {
  return (
    <div class="flex items-center justify-between min-h-screen relative">
      <nav class="absolute w-full top-16 flex justify-end gap-4">
        {/* // LinkedIn  */}
        <a
          class="btn--icon"
          rel="noopener noreferrer"
          target="_blank"
          title="Check LinkedIn Profile"
          href="https://www.linkedin.com/in/manusanchez2/"
        >
          <SVGManager svg="linkedin" classCustom="text-capcomBlue h-6 w-6" />
        </a>
        {/* // YouTube  */}
        <a
          class="btn--icon"
          rel="noopener noreferrer"
          target="_blank"
          title="Check YouTube Channel"
          href="https://www.youtube.com/channel/UCX3IE_OjG20p_AwbX06YAEg"
        >
          <SVGManager svg="youtube" classCustom="text-capcomBlue h-6 w-6" />
        </a>
        {/* // GitHub  */}
        <a
          class="btn--icon"
          rel="noopener noreferrer"
          target="_blank"
          title="Check GitHub Repo"
          href="https://github.com/manuelsanchezweb"
        >
          <SVGManager svg="github" classCustom="text-capcomBlue h-6 w-6" />
        </a>
      </nav>

      <div class="flex flex-col gap-8 max-w-[550px]">
        <SVGManager svg="capcom" classCustom="w-[330px] h-auto" />
        <p class="text-2xl">
          There are pretty cool games recently and you might not know which one
          is for you. Let me help you!
        </p>
        <div class="flex items-center gap-8">
          <Link class="btn btn--border" href="/advisor/">
            Go to the Advisor
          </Link>
          <Link class="link" href="/latest-games/">
            See latest games
          </Link>
        </div>
      </div>

      <Link href="/advisor/" title="Go to the advisor">
        <img class="cd" src="./cd.png" alt="cd games" />
      </Link>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Capcom Advisor',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
}
