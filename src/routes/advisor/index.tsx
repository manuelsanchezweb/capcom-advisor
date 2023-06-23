import { $, component$, useSignal } from '@builder.io/qwik'
import { SVGManager } from '~/components/svg/svg-manager'
import { Debug } from '~/components/debug/debug'
import { Step1, Step2, Step3, Step4 } from '~/components/steps'
import { useGlobalState } from '~/ctx/ctx'
import { Navigation } from '~/components/navigation/navigation'
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city'
import { getGames } from '~/api/getGames'

export const useGames = routeLoader$(async () => {
  try {
    return await getGames()
  } catch (error) {
    console.error('An error occurred while fetching games!', error)
    return []
  }
})

export default component$(() => {
  const ctx = useGlobalState()
  // const { genre } = ctx
  const step = useSignal(1)
  const { value: games } = useGames()
  console.log(games)

  const handleNextStep = $(() => {
    if (step.value === 1) {
      // Additional logic for Step 1 completion
      step.value = 2 // Move to Step 2
      console.log('step', step.value)
    } else if (step.value === 2) {
      // Additional logic for Step 2 completion
      step.value = 3 // Move to Step 3
    } else if (step.value === 3) {
      // Additional logic for Step 3 completion
      step.value = 4 // Move back to Step 1
    }
  })

  const handlePreviousStep = $(() => {
    if (step.value === 1) {
      // Move to the last step if trying to go back from Step 1
      step.value = 3
    } else if (step.value === 2) {
      // Move back to Step 1 from Step 2
      step.value = 1
    } else if (step.value === 3) {
      // Move back to Step 2 from Step 3
      step.value = 2
    } else if (step.value === 4) {
      // Move back to Step 3 from Step 4
      step.value = 3
    }
  })

  const handleEndApp = $(() => {
    step.value = 1 // Reset the current step to the initial step
    // Reset your context here by updating the necessary state values
    // For example, you can set `genre` to an empty string or null
    ctx.name = ''
    ctx.genre = 'Action'
    ctx.platform = 'PC'
    ctx.game = 'Resident Evil 4 Remake'
  })

  return (
    <div class="flex flex-col items-center min-h-screen w-full max-w-[1440px] px-5 mx-auto md:px-16 lg:px-[120px]">
      <div class="w-full relative min-h-screen">
        <Navigation />
        <Debug />
        <div class="flex flex-col min-h-[90vh] items-center justify-center gap-6 text-center max-w-[650px] mx-auto">
          <SVGManager
            svg="capcom"
            classCustom="capcom-logo w-[230px] md:w-[330px] h-auto opacity-0"
          />

          {step.value === 1 && <Step1 onNextStep={handleNextStep} />}
          {step.value === 2 && (
            <Step2
              handlePreviousStep={handlePreviousStep}
              onNextStep={handleNextStep}
            />
          )}
          {step.value === 3 && (
            <Step3
              handlePreviousStep={handlePreviousStep}
              onNextStep={handleNextStep}
            />
          )}
          {step.value === 4 && (
            <Step4
              handlePreviousStep={handlePreviousStep}
              onEndApp={handleEndApp}
            />
          )}
        </div>
      </div>
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
