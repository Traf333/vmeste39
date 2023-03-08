import { GraphQLClient } from 'graphql-request'
import { postsQuery, postSlugsQuery, postQuery } from '../queries/posts'
import { IPost } from 'env'

const client = new GraphQLClient(import.meta.env.PUBLIC_CONTENT_API_URL)

type TPromiseResponse<T> = Promise<Record<string, T>>

export const getPosts = (): TPromiseResponse<IPost[]> => client.request(postsQuery)
export const getPostSlugs = () => client.request(postSlugsQuery)
export const getPost = (slug: string): TPromiseResponse<IPost> => client.request(postQuery, { slug })
