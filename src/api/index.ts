import axios from 'axios'
import { RawAxiosRequestHeaders } from 'axios'
const baseUrl = 'http://localhost:8000/api/'
interface IRequestAPI {
  url: string
  query?: object
  data?: object
  token?: string
  success?: (e: object) => void
  pending?: () => void
  failure?: (e: object) => void
}
interface IHeaders extends RawAxiosRequestHeaders {
  Authorization?: string
}
const requestAPI =
  (method: string) =>
  async ({
    url,
    query,
    data,
    token,
    success,
    pending,
    failure
  }: IRequestAPI) => {
    console.log('request', method)
    const apiUrl = baseUrl + url
    const headers: IHeaders = {
      'Content-Type': 'application/json'
    }
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }
    console.log(headers)
    pending && pending()
    axios({
      method: method,
      url: apiUrl,
      params: query,
      headers: headers,
      data: data
    })
      .then((el) => {
        success && success(el.data)
      })
      .catch((err) => {
        failure && failure(err)
      })
  }

export const getRequest = requestAPI('get')
export const postRequest = requestAPI('post')
export const deleteRequest = requestAPI('delete')
export const putRequest = requestAPI('put')
export const patchRequest = requestAPI('patch')
