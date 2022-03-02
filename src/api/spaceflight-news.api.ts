import { AxiosRequestConfig } from 'axios'
import { ApiResponse, makeAxiosRequest } from '@/api/axios'
import {
  SpaceflightNewsArticle,
  SpaceflightNewsArticleType,
  SpaceflightNewsReport,
} from '@/types/spaceflight-news.types'

const configDefaults: AxiosRequestConfig = {
  // Spaceflight News
  url: 'https://api.spaceflightnewsapi.net/v3',
  method: 'get',
  params: {},
}

export default {
  fetchSpaceflightNewsArticles(
    type: SpaceflightNewsArticleType
  ): ApiResponse<SpaceflightNewsArticle[]> {
    const config = { ...configDefaults }
    config.url += `/${type}`

    return makeAxiosRequest(config)
  },
  fetchSpaceflightNewsReports(titleContains?: string): ApiResponse<SpaceflightNewsReport[]> {
    const config = { ...configDefaults }
    config.url += '/reports'
    if (titleContains) config.params.title_contains = titleContains

    return makeAxiosRequest(config)
  },
}
