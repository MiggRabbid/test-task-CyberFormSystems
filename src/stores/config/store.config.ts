import type { IPostsState } from '../types/store'

export const initState: IPostsState = {
  posts: [],
  user: null,
  comments: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  postsPerPage: 10,
  searchQuery: '',
  selectedPost: null,
}
