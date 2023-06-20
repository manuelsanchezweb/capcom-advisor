import { Bee } from '@bee-icons/qwik'
import { component$, useVisibleTask$ } from '@builder.io/qwik'
import { useNavigate } from '@builder.io/qwik-city'
import { SVGManager } from '~/components/svg/svg-manager'
import { timeline, stagger } from 'motion'

export default component$(() => {
  const nav = useNavigate()

  useVisibleTask$(() => {
    const title = document.querySelector('h1')
    const paragraphs = document.querySelectorAll('p')
    const button = document.querySelector('.btn--next')
    if (!title || !paragraphs || !button) return

    const sequence: any = [
      [title, { opacity: [0, 1], y: [-50, 0] }, { at: 0.1 }],
      [
        paragraphs,
        { opacity: [0, 1], y: [-50, 0] },
        { duration: 0.3, delay: stagger(0.2) },
      ],
      [button, { opacity: [0, 1], y: [-50, 0] }, { at: 0.9 }],
    ]

    timeline(sequence, {})
  })

  return (
    <div class="flex flex-col items-center min-h-screen w-full max-w-[1440px] px-5 mx-auto md:px-16 lg:px-[120px]">
      <div class="w-full relative min-h-screen">
        <button
          class="btn btn--border absolute top-12 left-0 rounded-full h-[35px] w-[35px] flex justify-center items-center hover:scale-105 focus:scale-105 transition-transform"
          onClick$={() => nav('/')}
        >
          <Bee customClass="text-capcomBlue" icon="chevron-left" />
        </button>

        <div class="flex flex-col min-h-screen items-center justify-center gap-8 text-center max-w-[500px] mx-auto">
          <SVGManager
            svg="capcom"
            classCustom="w-[230px] md:w-[330px] h-auto"
          />
          <h1 class="text-xl md:text-3xl font-bold opacity-0">
            Welcome to the Capcom Advisor
          </h1>
          <p class="text-md md:text-xl opacity-0">
            A pretty unconventional way to send an unsolicited application for a
            job.
          </p>
          <p class="text-md md:text-xl opacity-0">
            But so it is, I am Manuel, and I studied to be a professional
            translator. At the end, I ended up translating a best seller from
            German into Spanish and working as a Content Manager in a German
            Company.
          </p>
          <p class="text-md md:text-xl opacity-0">
            But interviews should go both sides, right?
          </p>
          <button
            class="btn btn--border btn--next opacity-0"
            onClick$={() => {
              alert('Next step is coming!')
            }}
          >
            Next step
          </button>
        </div>
      </div>
    </div>
  )
})
