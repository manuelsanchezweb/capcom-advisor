import { component$, useVisibleTask$ } from '@builder.io/qwik'
import { type DocumentHead, Link } from '@builder.io/qwik-city'
import { SVGManager } from '~/components/svg/svg-manager'
import { timeline } from 'motion'

export default component$(() => {
  useVisibleTask$(() => {
    const text = document.querySelector('.capcom-text')
    const cd = document.querySelector('.capcom-cd')
    const nav = document.querySelector('.capcom-nav')
    const footer = document.querySelector('.capcom-footer')
    if (!text || !cd) return

    const sequence: any = [
      [text, { opacity: [0, 1], x: [-100, 0] }, { at: 0.1 }],
      [cd, { opacity: [0, 1], y: [100, 0] }, { at: 0.3 }],
      [nav, { opacity: [0, 1], y: [100, 0] }, { at: 0.5 }],
      [footer, { opacity: [0, 1], y: [-100, 0] }, { at: 0.7 }],
    ]

    timeline(sequence, {})
  })

  return (
    <div class="flex flex-col min-h-screen w-full max-w-[1440px] px-5 mx-auto md:px-16 lg:px-[120px]">
      <nav class="capcom-nav opacity-0 w-full flex justify-end gap-4 mt-12">
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

      <main class="flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-[70vh] gap-4 relative mb-8">
        <div class="capcom-text opacity-0 flex flex-col items-center text-center lg:items-start lg:text-left my-12 gap-8 max-w-[550px]">
          <SVGManager
            svg="capcom"
            classCustom="w-[230px] md:w-[330px] h-auto"
          />
          <p class="md:text-2xl">
            There are pretty cool games recently and you might not know which
            one is for you. Let me help you!
          </p>
          <div class="flex flex-col w-full lg:flex-row items-center gap-8">
            <a class="btn btn--border" href="/advisor">
              Go to the Advisor
            </a>
            <a class="link" href="/latest-games/">
              See latest games
            </a>
          </div>
        </div>

        <a
          href="/advisor"
          class="capcom-cd opacity-0"
          title="Go to the advisor"
        >
          <div class="cd w-[280px] h-[280px] md:w-[450px] md:h-[450px]"></div>
        </a>
      </main>
      <footer class="capcom-footer opacity-0 w-full flex flex-col gap-4 my-12 mt-auto items-center text-center">
        <p>
          This is an unofficial app created with 💛 by{' '}
          <a
            rel="nofollow noopener"
            target="_blank"
            title="Check Page of manuelsanchezweb"
            href="https://github.com/manuelsanchezweb"
          >
            manuelsanchezweb
          </a>
        </p>
        <p>
          All the images and content are property of{' '}
          <a
            rel="nofollow noopener"
            target="_blank"
            title="Check General Capcom Page"
            href="https://www.capcom.com/"
          >
            Capcom
          </a>
        </p>
      </footer>
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
