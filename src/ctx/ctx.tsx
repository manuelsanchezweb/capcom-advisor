import {
  createContextId,
  useContext,
  useContextProvider,
  useStore,
} from '@builder.io/qwik'

interface UserStore {
  name: string
  genre: string
  platform: string
  game: string
}

const UserContext = createContextId<UserStore>('user-context')

export const useProvideGlobalState = () => {
  const store = useStore({
    name: '',
    genre: 'Action',
    platform: 'PC',
    game: 'GTA V',
  })

  useContextProvider(UserContext, store)
}

export const useGlobalState = () => {
  return useContext(UserContext)
}
