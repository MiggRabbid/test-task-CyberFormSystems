import { axiosInstance } from './client.api'

export enum TypeAxiosMethod {
  get = 'get',
  post = 'post',
  delete = 'delete',
}

export const headersJson = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
} as const

export async function sendRequest(props: {
  method: TypeAxiosMethod
  endpoint?: string
  data?: Record<string, string | number>
  params?: Record<string, string | number>
}) {
  const { method, endpoint, data = {}, params = {} } = props

  const response = await axiosInstance.request({
    method,
    url: endpoint,
    data: data,
    params: params,
    headers: headersJson,
  })
  return { data: response.data }
}
