import { component$ } from '@builder.io/qwik'
import { SVGManager } from '../svg/svg-manager'

export const Navigation = component$(() => {
  return (
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
  )
})
