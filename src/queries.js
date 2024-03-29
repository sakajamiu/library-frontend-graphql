import { gql } from "@apollo/client";

export const FETCH_AUTHORS = gql`
query {
    allAuthor{
        name
        born 

    }
}`

export const FETCH_BOOKS =gql `
query {
    allBook{
        title
        published
        author{
            name
        }
    }
}`

export const CREATE_BOOK = gql`
mutation createBook(
        $title: String!,
        $author: String!,
        $published: Int!,
        $genres: [String!]!
    )
    {
        addBook(title:$title,author: $author,published: $published,genres: $genres){
            title
            author
            published
            genres
        }
    }
`
export  const EDIT_AUTHOR = gql`
mutation editAuthor(
    $name: String!,
    $born: Int!
){
    editAuthor(name: $name, born:$born){
        name
        born
        
    }
}`

export const LOGIN =gql`
mutation login(
    $username: String!,
    $password: String!
){
    login(username: $username, password:$password){
        value
    }
}`