import axios, { AxiosRequestConfig } from 'axios'

export type ApiResponse<T> = Promise<[null, T] | [Error, null]>

export async function makeAxiosRequest<T>(config: AxiosRequestConfig): ApiResponse<T> {
  try {
    const { data } = await axios.request(config)
    return [null, data]
  } catch (error) {
    return [error, null]
  }
}
