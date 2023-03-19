import { gql } from 'graphql-request'

export const projectsQuery = gql`
    {
        projects {
            title
            slug
            content
            coverImage {
                url
            }
        }

    }
`

export const projectSlugsQuery = gql`
    {
        projects {
            slug
        }

    }
`

export const projectQuery = gql`
    query getproject($slug: String!){
        project(where: {slug: $slug}) {
            title
            slug
            content
            coverImage {
                url
            }
        }
    }
`
