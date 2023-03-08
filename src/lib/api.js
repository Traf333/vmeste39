import { GraphQLClient } from 'graphql-request'
import { postsQuery } from '../queries/posts'


const client = new GraphQLClient(import.meta.env.PUBLIC_CONTENT_API_URL)

export const getPosts = () => client.request(postsQuery)
// export const getArticleSlugs = () => client.request(articleSlugsQuery)
// export const getArticle = slug => client.request(articleQuery, { slug })
