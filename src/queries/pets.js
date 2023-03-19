import { gql } from 'graphql-request'

export const petsQuery = gql`
    {
        pets {
            id
            name
            intro
            picture {
                url
            }
        }

    }
`


export const petQuery = gql`
    query getpet($id: String!){
        pet(where: {id: $id}) {
            id
            name
            intro
            bio
            picture {
                url
            }
        }
    }
`
