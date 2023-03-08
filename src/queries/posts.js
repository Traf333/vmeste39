import { gql } from 'graphql-request'

export const postsQuery = gql`
    {
        posts {
            title
            slug
            content
            coverImage {
                url
            }
        }

    }
`

export const postSlugsQuery = gql`
    {
        posts {
            slug
        }

    }
`

export const postQuery = gql`
    query getpost($slug: String!){
        post(where: {slug: $slug}) {
            title
            slug
            category
            metaDescription
            metaKeywords
            metaTitle
            publishedDate
            cover {
                url
            }
            content {
                html
            }
            author {
                name
                bio
                photo {
                    url
                }
            }
            
        }
        content(where: { type: "posts" }) {
            bannerText
            bannerTitle
            bannerImage {
                url
            }
        }

    }
`
