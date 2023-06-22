import { component$, useSignal } from '@builder.io/qwik'
import { useGlobalState } from '~/ctx/ctx'

export const Debug = component$(() => {
  const ctx = useGlobalState()
  const { name, genre, platform, game } = ctx

  const isDebugOpened = useSignal(true)

  return (
    <>
      {isDebugOpened.value ? (
        <div class="fixed top-0 left-0 bg-white p-4 z-10 border border-black text-md text-left">
          <button
            class="btn mb-2 flex w-fit ml-auto"
            onClick$={() => (isDebugOpened.value = false)}
          >
            X
          </button>
          <div class="text-2xl mb-5">Context</div>
          <hr class="bg-black h-[5px] my-2" />
          <ul>
            <li>This is the name: {name}</li>
            <li>This is the genre: {genre}</li>
            <li>This is the platform: {platform}</li>
            <li>This is the game: {game}</li>
          </ul>
        </div>
      ) : (
        <button
          class="fixed top-0 left-0 bg-white p-4 z-10 border border-black text-md text-left"
          onClick$={() => (isDebugOpened.value = true)}
        >
          Open Debug
        </button>
      )}
    </>
  )
})
