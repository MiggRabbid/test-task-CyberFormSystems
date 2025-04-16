import type { IPost, TypePosts } from '@/types/post'

export interface IPostsState {
  posts: TypePosts
  isLoading: boolean
  error: string | null
  currentPage: number
  postsPerPage: 10 | 15 | 20
  searchQuery: string
  selectedPost: IPost | null
}
