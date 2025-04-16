import type { IPost, TypePosts } from '@/types/post'
import { sendRequest, TypeAxiosMethod } from './config.api'
import { endpoints } from './endpoints.api'
import type { IUser } from '@/types/user'
import type { TypeComments } from '@/types/comments'

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
  getUserById: async ({ params }: { params: { userId: number } }): Promise<IUser> => {
    const response = await sendRequest({
      method: TypeAxiosMethod.get,
      endpoint: endpoints.userById(params.userId),
    })
    return response.data
  },
  getCommentsByPost: async ({ params }: { params: { postId: number } }): Promise<TypeComments> => {
    const response = await sendRequest({
      method: TypeAxiosMethod.get,
      endpoint: endpoints.commentsByPost(params.postId),
    })
    return response.data
  },
}
