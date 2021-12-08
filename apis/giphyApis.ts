import request from './request'

const SEARCH_URL = 'https://api.giphy.com/v1/gifs/search'

export const search = async (q: string, limit: number, offset: number) => {
  const params = {
    api_key: 'x4EXBZSOQ0D8eOWcdIHlAf17gqg78FBj',
    limit,
    offset,
    q
  }
  return await request<GiphySearchResultType>(SEARCH_URL, { method: 'GET', query: params })
}

export type GiphySearchResultType = {
  data: GiphyDataType[]
}

export type GiphyDataType = {
  type: string
  id: string
  url: string
  embed_url: string
  images: {
    [key in 'original' | 'downsized']: {
      height: number
      width: number
      url: string
    }
  }
}
