import { selector } from 'recoil'
import { search, GiphyDataType } from '@/apis/giphyApis'
import { giphyQuery } from './atoms'

export const giphySearchResult = selector<GiphyDataType[]>({
  key: 'giphySearchResult',
  get: async ({ get }) => {
    const q = get(giphyQuery)
    if (q === '') return []

    const res = await search(q, 20, 1)
    return res.data
  }
})
