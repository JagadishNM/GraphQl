export const typeDefs = `#graphQl
    type Book{
        id: ID!
        title: String
        publishedYear: Int,
        author: Author
    }

    type Author{
        id: ID!
        name: String!,
        books: [Book]
    }

    type Query{
        authors: [Author]
        books: [Book],
    }

    type Mutation{
        addBook(id: ID!,title: String!, publishedYear: String ): Book!
    }

`