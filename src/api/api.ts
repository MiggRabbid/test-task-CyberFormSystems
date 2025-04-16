import type { IPost, TypePosts } from '@/types/post'
import { sendRequest, TypeAxiosMethod } from './config.api'
import { endpoints } from './endpoints.api'

export const api = {
  getAllPosts: async (): Promise<TypePosts> => {
    const response = await sendRequest({
      method: TypeAxiosMethod.get,
      endpoint: endpoints.posts,
    })
    return response.data
  },
  getPostById: async ({ params }: { params: { postId: number } }): Promise<IPost> => {
    const response = await sendRequest({
      method: TypeAxiosMethod.get,
      endpoint: endpoints.postById(params.postId),
    })
    return response.data
  },
}
