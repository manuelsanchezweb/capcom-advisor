import { component$, useVisibleTask$ } from '@builder.io/qwik'
import { type DocumentHead, Link } from '@builder.io/qwik-city'
import { SVGManager } from '~/components/svg/svg-manager'
import { timeline, stagger } from 'motion'

export default component$(() => {
  useVisibleTask$(() => {
    const text = document.querySelector('.capcom-text')
    const cd = document.querySelector('.capcom-cd')
    if (!text || !cd) return

    const sequence: any = [
      [text, { opacity: [0, 1], x: [-100, 0] }, { at: 0.2 }],
      [cd, { opacity: [0, 1], y: [100, 0] }, { at: 0.5 }],
    ]

    timeline(sequence, {})
  })

  return (
    <div class="flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen gap-4 relative">
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

      <div class="capcom-text flex flex-col my-12 gap-8 max-w-[550px]">
        <SVGManager svg="capcom" classCustom="w-[230px] md:w-[330px] h-auto" />
        <p class="md:text-2xl">
          There are pretty cool games recently and you might not know which one
          is for you. Let me help you!
        </p>
        <div class="flex flex-col w-full lg:flex-row items-center gap-8">
          <Link class="btn btn--border" href="/advisor/">
            Go to the Advisor
          </Link>
          <Link class="link" href="/latest-games/">
            See latest games
          </Link>
        </div>
      </div>

      <Link class="capcom-cd" title="Go to the advisor">
        <div class="cd w-[280px] h-[280px] md:w-[450px] md:h-[450px]"></div>
      </Link>
    </div>
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
