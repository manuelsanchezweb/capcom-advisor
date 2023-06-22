import { $, component$, useSignal } from '@builder.io/qwik'
import { SVGManager } from '~/components/svg/svg-manager'
import { Debug } from '~/components/debug/debug'
import { Step1, Step2, Step3, Step4 } from '~/components/steps'
import { useGlobalState } from '~/ctx/ctx'

export default component$(() => {
  const ctx = useGlobalState()
  // const { genre } = ctx
  const step = useSignal(1)

  const handleNextStep = $(() => {
    console.log('step', step.value)

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
    } else if (step.value === 4) {
      // Additional logic for Step 4 completion
      step.value = 1 // Move back to Step 1
      // TODO: clean the context here
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
    ctx.genre = ''
    ctx.platform = ''
    ctx.game = ''
  })

  return (
    <div class="flex flex-col items-center min-h-screen w-full max-w-[1440px] px-5 mx-auto md:px-16 lg:px-[120px]">
      <div class="w-full relative min-h-screen">
        <Debug />
        <div class="flex flex-col min-h-screen items-center justify-center gap-8 text-center max-w-[650px] mx-auto">
          <SVGManager
            svg="capcom"
            classCustom="capcom-logo w-[230px] md:w-[330px] h-auto opacity-0"
          />

          {step.value === 1 && (
            <Step1
              handlePreviousStep={handlePreviousStep}
              onNextStep={handleNextStep}
            />
          )}
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
