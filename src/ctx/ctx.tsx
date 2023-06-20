import {
  createContextId,
  useContext,
  useContextProvider,
  useStore,
} from '@builder.io/qwik'

interface UserStore {
  genre: string
  platform: string
  game: string
}

const UserContext = createContextId<UserStore>('user-context')

export const useProvideGlobalState = () => {
  const store = useStore(
    {
      genre: 'Action',
      platform: 'PC',
      game: 'GTA V',
    },
    { deep: true }
  )

  useContextProvider(UserContext, store)
}

export const useGlobalState = () => {
  return useContext(UserContext)
}
