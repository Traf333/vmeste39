import { GraphQLClient } from 'graphql-request'
import { postsQuery, postSlugsQuery, postQuery } from '../queries/posts'
import { projectsQuery, projectSlugsQuery, projectQuery } from '../queries/projects'
import { petsQuery, petQuery } from '../queries/pets'
import { IPet, IPost, IProject } from 'env'

const client = new GraphQLClient(import.meta.env.PUBLIC_CONTENT_API_URL)

type TPromiseResponse<T> = Promise<Record<string, T>>

export const getPosts = (): TPromiseResponse<IPost[]> => client.request(postsQuery)
export const getPostSlugs = () => client.request(postSlugsQuery)
export const getPost = (slug: string): TPromiseResponse<IPost> => client.request(postQuery, { slug })

export const getProjects = (): TPromiseResponse<IProject[]> => client.request(projectsQuery)
export const getProjectSlugs = () => client.request(projectSlugsQuery)
export const getProject = (slug: string): TPromiseResponse<IProject> => client.request(projectQuery, { slug })

export const getPets = (): TPromiseResponse<IPet[]> => client.request(petsQuery)
export const getPet = (slug: string): TPromiseResponse<IPet> => client.request(petQuery, { slug })
