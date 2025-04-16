import type { IPost, TypePosts } from '@/types/post'

export type TypePostsPerPage = 10 | 15 | 20

export interface IPostsState {
  posts: TypePosts
  isLoading: boolean
  error: string | null
  currentPage: number
  postsPerPage: TypePostsPerPage
  searchQuery: string
  selectedPost: IPost | null
}
