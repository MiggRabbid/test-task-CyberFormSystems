import { defineStore } from 'pinia'
import { api } from '@/api/api'
import type { IPostsState } from './types/postsStore'
import type { IPost, TypePosts } from '@/types/post'

export const usePostsStore = defineStore('posts', {
  state: (): IPostsState => ({
    posts: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    postsPerPage: 10,
    searchQuery: '',
    selectedPost: null,
  }),
  getters: {
    filteredPosts(state): TypePosts {
      if (state.searchQuery.trim() === '') {
        return state.posts
      }
      const query = state.searchQuery.toLowerCase()
      return state.posts.filter(
        (post: IPost) =>
          post.title.toLowerCase().includes(query) || post.body.toLowerCase().includes(query),
      )
    },
    paginatedPosts(state): TypePosts {
      const postsToPaginate = this.filteredPosts
      const start = (state.currentPage - 1) * 10
      return postsToPaginate.slice(start, start + 10)
    },
  },
  actions: {
    async fetchPosts() {
      this.isLoading = true
      try {
        const data: TypePosts = await api.getAllPosts()
        this.posts = data
      } catch (error: unknown) {
        this.error = error instanceof Error ? error.message : 'Ошибка при загрузке постов'
      } finally {
        this.isLoading = false
      }
    },
    async fetchPostById(postId: number) {
      this.isLoading = true
      try {
        const data: IPost = await api.getPostById({ params: { postId } })
        this.selectedPost = data
      } catch (error: unknown) {
        this.error = error instanceof Error ? error.message : 'Ошибка при загрузке поста'
      } finally {
        this.isLoading = false
      }
    },
    setSearchQuery(query: string) {
      this.searchQuery = query
      this.currentPage = 1
    },
    setCurrentPage(page: number) {
      this.currentPage = page
    },
    clearError() {
      this.error = null
    },
  },
})
