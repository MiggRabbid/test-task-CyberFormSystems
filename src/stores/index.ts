import { defineStore } from 'pinia'
import { api } from '@/api/api'
import type { IPostsState } from './types/store'
import type { IPost, TypePosts } from '@/types/post'
import { initState } from './config/store.config'
import type { TypeComments } from '@/types/comments'
import type { IUser } from '@/types/user'

export const usePostsStore = defineStore('posts', {
  state: (): IPostsState => ({ ...initState }),
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
      const start = (state.currentPage - 1) * this.postsPerPage
      return postsToPaginate.slice(start, start + this.postsPerPage)
    },
    totalPages(state): number {
      return Math.ceil(this.filteredPosts.length / state.postsPerPage)
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
        await this.fetchUserById(data.userId)
        await this.fetchCommentsByPost(postId)
        this.selectedPost = data
      } catch (error: unknown) {
        this.error = error instanceof Error ? error.message : 'Ошибка при загрузке поста'
      } finally {
        this.isLoading = false
      }
    },
    async fetchUserById(userId: number) {
      this.isLoading = true
      try {
        const data: IUser = await api.getUserById({ params: { userId } })
        this.user = data
      } catch (error: unknown) {
        this.error =
          error instanceof Error ? error.message : 'Ошибка при загрузке данных пользователя'
      } finally {
        this.isLoading = false
      }
    },
    async fetchCommentsByPost(postId: number) {
      this.isLoading = true
      try {
        const data: TypeComments = await api.getCommentsByPost({ params: { postId } })
        this.comments = data
      } catch (error: unknown) {
        this.error = error instanceof Error ? error.message : 'Ошибка при загрузке комментариев'
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

    setPostsPerPage(newPostsPerPage: 10 | 15 | 20) {
      this.postsPerPage = newPostsPerPage
      this.currentPage = 1
    },
    clearError() {
      this.error = initState.error
    },
    clearUserAndComments() {
      this.user = initState.user
      this.comments = initState.comments
    },
    clearComments() {},
  },
})
