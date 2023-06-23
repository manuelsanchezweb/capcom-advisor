import {
  createContextId,
  useContext,
  useContextProvider,
  useStore,
} from '@builder.io/qwik'
import { type Game } from '~/types/types'

interface UserStore {
  name: string
  genre: string
  platform: string
  games: Game[]
}

const UserContext = createContextId<UserStore>('user-context')

export const useProvideGlobalState = () => {
  const store = useStore({
    name: '',
    genre: 'action',
    platform: 'ps5',
    games: [],
  })

  useContextProvider(UserContext, store)
}

export const useGlobalState = () => {
  return useContext(UserContext)
}
