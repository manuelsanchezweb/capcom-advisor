import { Bee } from '@bee-icons/qwik'
import { component$ } from '@builder.io/qwik'
import { useNavigate } from '@builder.io/qwik-city'

export default component$(() => {
  const nav = useNavigate()

  return (
    <div class="flex flex-col justify-center min-h-screen">
      <button
        class="btn btn--border rounded-full h-[35px] w-[35px] flex justify-center items-center hover:scale-105 focus:scale-105 transition-transform"
        onClick$={() => nav('/')}
      >
        <Bee customClass="text-capcomBlue" icon="chevron-left" />
      </button>

      <h1>Advisor Page</h1>
    </div>
  )
})
