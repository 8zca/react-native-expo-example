import { atom } from 'recoil'

export const giphyQuery = atom<string>({
  key: 'giphyQuery',
  default: ''
})

export const submitQuery = atom<string>({
  key: 'submitQuery',
  default: ''
})
