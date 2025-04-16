export const ABSOLUTE_URL = 'https://jsonplaceholder.typicode.com'

export const endpoints = {
  posts: '/posts',
  postById: (postId: number) => `/posts/${postId}`,
  commentsByPost: (postId: number) => `/posts/${postId}/comments`,
}
