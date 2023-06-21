import {
  $,
  PropFunction,
  component$,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik'
// import { useNavigate } from '@builder.io/qwik-city'
import { SVGManager } from '~/components/svg/svg-manager'
import { timeline, stagger } from 'motion'
import { Debug } from '~/components/debug/debug'
// import { useGlobalState } from '~/ctx/ctx'

export default component$(() => {
  // const nav = useNavigate()
  // const ctx = useGlobalState()
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
      step.value = 1 // Move back to Step 1
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
    }
  })

  const handleEndApp = $(() => {
    step.value = 1 // Reset the current step to the initial step
    // Reset your context here by updating the necessary state values
    // For example, you can set `genre` to an empty string or null
    // ctx.setGenre('');
  })

  return (
    <div class="flex flex-col items-center min-h-screen w-full max-w-[1440px] px-5 mx-auto md:px-16 lg:px-[120px]">
      <div class="w-full relative min-h-screen">
        <Debug />
        <div class="flex flex-col min-h-screen items-center justify-center gap-8 text-center max-w-[500px] mx-auto">
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
              onEndApp={handleEndApp}
            />
          )}
        </div>
      </div>
    </div>
  )
})

export const Step1 = component$(
  ({
    onNextStep,
    handlePreviousStep,
  }: {
    onNextStep: PropFunction<() => void>
    handlePreviousStep: PropFunction<() => void>
  }) => {
    useVisibleTask$(() => {
      const logo = document.querySelector('.capcom-logo')
      const title = document.querySelector('h2')
      const paragraphs = document.querySelectorAll('p')
      const button = document.querySelector('.btn--next')
      const back = document.querySelector('.btn--back')
      if (!title || !paragraphs || !button) return

      const sequence: any = [
        [logo, { opacity: [0, 1], y: [-50, 0] }, { at: 0.1 }],
        [title, { opacity: [0, 1], y: [-50, 0] }, { at: 0.3 }],
        [
          paragraphs,
          { opacity: [0, 1], y: [-50, 0] },
          { duration: 0.3, delay: stagger(0.2) },
        ],
        [button, { opacity: [0, 1], y: [-50, 0] }, { at: 1.1 }],
        [back, { opacity: [0, 1], y: [-50, 0] }, { at: 1.3 }],
      ]

      timeline(sequence, {})
    })

    return (
      <>
        <button
          class="btn btn--border p-0 text-capcomBlue btn--back opacity-0 absolute top-12 left-0 rounded-md flex justify-center items-center hover:scale-105 focus:scale-105 transition-transform"
          onClick$={() => handlePreviousStep()}
        >
          <svg
            class="bee bee-icons text-capcomBlue"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0673 19.1347L7.93266 12L15.0673 4.86534"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <h2 class="text-xl md:text-3xl font-bold opacity-0">
          Welcome to the Capcom Advisor
        </h2>
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
          onClick$={() => onNextStep()}
        >
          Next step
        </button>
      </>
    )
  }
)

export const Step2 = component$(
  ({
    onNextStep,
    handlePreviousStep,
  }: {
    onNextStep: PropFunction<() => void>
    handlePreviousStep: PropFunction<() => void>
  }) => {
    useVisibleTask$(() => {
      const logo = document.querySelector('.capcom-logo')
      const title = document.querySelector('h2')
      const paragraphs = document.querySelectorAll('p')
      const button = document.querySelector('.btn--next')
      const categories = document.querySelectorAll('.capcom-categories')
      const back = document.querySelector('.btn--back')
      if (!title || !paragraphs || !button) return

      const sequence: any = [
        [logo, { opacity: [0, 1], y: [-50, 0] }, { at: 0.1 }],
        [title, { opacity: [0, 1], y: [-50, 0] }, { at: 0.3 }],
        [
          paragraphs,
          { opacity: [0, 1], y: [-50, 0] },
          { duration: 0.3, delay: stagger(0.2) },
        ],
        [categories, { opacity: [0, 1], y: [-50, 0] }, { at: 1.1 }],
        [button, { opacity: [0, 1], y: [-50, 0] }, { at: 1.3 }],
        [back, { opacity: [0, 1], y: [-50, 0] }, { at: 1.5 }],
      ]

      timeline(sequence, {})
    })

    return (
      <>
        <button
          class="btn btn--border p-0 text-capcomBlue btn--back opacity-0 absolute top-12 left-0 rounded-md flex justify-center items-center hover:scale-105 focus:scale-105 transition-transform"
          onClick$={() => handlePreviousStep()}
        >
          <svg
            class="bee bee-icons text-capcomBlue"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0673 19.1347L7.93266 12L15.0673 4.86534"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <h2 class="text-xl md:text-3xl font-bold opacity-0">
          What is your favourite genre?
        </h2>
        <p class="text-md md:text-xl opacity-0">
          When I was a child, my sister used to challenge me to Street Fighter 3
          in the arcade machine we had in a bar close to our place.
        </p>
        <p class="text-md md:text-xl opacity-0">
          That is why it motivated me so much to learn to code and create games
          on my own and cool pages like this one.
        </p>
        <p class="text-md md:text-xl opacity-0">
          But again, where were we... and yeah, your favorite genre?
        </p>
        <ul class="capcom-categories">
          <li>
            <input
              checked
              type="radio"
              id="action"
              name="fav_language"
              value="action"
            />
              <label for="action">action</label>
          </li>
          <li>
             {' '}
            <input
              type="radio"
              id="shooter"
              name="fav_language"
              value="shooter"
            />
              <label for="shooter">shooter</label>
          </li>
          <li>
            <input
              type="radio"
              id="adventure"
              name="fav_language"
              value="adventure"
            />
              <label for="adventure">adventure</label>
          </li>
           
        </ul>
        <button class="btn btn--border btn--next" onClick$={() => onNextStep()}>
          Next step
        </button>
      </>
    )
  }
)

export const Step3 = component$(
  ({
    onNextStep,
    handlePreviousStep,
  }: {
    onNextStep: PropFunction<() => void>
    onEndApp: PropFunction<() => void>
    handlePreviousStep: PropFunction<() => void>
  }) => {
    useVisibleTask$(() => {
      const logo = document.querySelector('.capcom-logo')
      const title = document.querySelector('h2')
      const paragraphs = document.querySelectorAll('p')
      const platforms = document.querySelectorAll('.capcom-platforms')
      const button = document.querySelector('.btn--next')
      const back = document.querySelector('.btn--back')
      if (!title || !paragraphs || !button) return

      const sequence: any = [
        [logo, { opacity: [0, 1], y: [-50, 0] }, { at: 0.1 }],
        [title, { opacity: [0, 1], y: [-50, 0] }, { at: 0.3 }],
        [
          paragraphs,
          { opacity: [0, 1], y: [-50, 0] },
          { duration: 0.3, delay: stagger(0.2) },
        ],
        [platforms, { opacity: [0, 1], y: [-50, 0] }, { at: 1.1 }],
        [button, { opacity: [0, 1], y: [-50, 0] }, { at: 1.3 }],
        [back, { opacity: [0, 1], y: [-50, 0] }, { at: 1.5 }],
      ]

      timeline(sequence, {})
    })

    return (
      <>
        {' '}
        <button
          class="btn btn--border p-0 text-capcomBlue btn--back opacity-0 absolute top-12 left-0 rounded-md flex justify-center items-center hover:scale-105 focus:scale-105 transition-transform"
          onClick$={() => handlePreviousStep()}
        >
          <svg
            class="bee bee-icons text-capcomBlue"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0673 19.1347L7.93266 12L15.0673 4.86534"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <h2 class="text-xl md:text-3xl font-bold opacity-0">
          What are you using to play these days?
        </h2>
        <p class="text-md md:text-xl opacity-0">
          I had been always a Nintendo guy until I got Xbox 360 and Xbox One.
          But recently I’ve been playing Resident Evil 4 Remake in PS5.
        </p>
        <p class="text-md md:text-xl opacity-0">
          Since 2021 I decided to work part-time in my current job and take the
          rest of the time to create side projects, like creating content for
          those interested in web development in Spanish on YouTube and Udemy.
        </p>
        <p class="text-md md:text-xl opacity-0">
          Also that gives me more quality time to spend with friends, family,
          and for doing nothing productive sometimes.
        </p>
        <p class="text-md md:text-xl opacity-0">
          But let’s get into business... how do you usually chill?
        </p>
        <ul class="capcom-platforms">
          <li>
            <input
              checked
              type="radio"
              id="ps5"
              name="fav_language"
              value="ps5"
            />
              <label for="ps5">ps5</label>
          </li>
          <li>
             {' '}
            <input
              type="radio"
              id="switch"
              name="fav_language"
              value="switch"
            />
              <label for="switch">switch</label>
          </li>
          <li>
            <input
              type="radio"
              id="xbox-one"
              name="fav_language"
              value="xbox-one"
            />
              <label for="xbox-one">xbox-one</label>
          </li>
           
        </ul>
        <button class="btn btn--border btn--next" onClick$={() => onNextStep()}>
          Next step
        </button>
      </>
    )
  }
)
