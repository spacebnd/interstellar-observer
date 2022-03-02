import { AxiosRequestConfig } from 'axios'
import { ApiResponse, makeAxiosRequest } from '@/api/axios'
import { PeopleInSpaceResponse } from '@/types/people-in-space.types'

const configDefaults: AxiosRequestConfig = {
  // People in Space Right Now
  url: 'http://api.open-notify.org/astros.json',
  method: 'get',
  params: {},
}

export default {
  fetchPeopleInSpace(): ApiResponse<PeopleInSpaceResponse> {
    const config = { ...configDefaults }

    return makeAxiosRequest(config)
  },
}
