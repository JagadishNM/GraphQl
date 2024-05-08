const data = {
    authors: [
        {id: 1, name: "Author 1", bookIds: [101,102]},
        {id: 2, name: "Author 2", bookIds: [103]}
    ],
    books: [
        {id: 101, title: "title 1", publishedYear: 2024, authorId: 1},
        {id: 102, title: "title 2", publishedYear: 2024, authorId: 2},
        {id: 103, title: "title 3", publishedYear: 2024, authorId: 2},
        {id: 104, title: "title 4", publishedYear: 2024, authorId: 1},
    ]
}
export const resolvers = {
    Book: {
        author: (parent, args, context, info) => {
            return data.authors.find(authorDetails => authorDetails.id === parent.authorId);
        }
    },

    Author: {
        books: (parent, args, context, info) => {
            return data.books.filter(bookDetails => parent.bookIds.includes(bookDetails.id));
        }
    },

    Query: {
        authors: (parent, args, context, info) =>{
            return data.authors;
        },

        books: (parent, args, context, info) =>{
            return data.books;
        }
    },

    Mutation: {
        addBook: (parent, args, context, info) => {
            data.books.push(args);
            return args;
        }
    }
}