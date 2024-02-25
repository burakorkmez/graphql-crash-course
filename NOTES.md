# graphql package =>

-   It is the core GraphQL implementation in **JavaScript**.
-   It provides the functionality to define GraphQL schemas, parse and validate GraphQL queries, execute queries against a schema, and format responses.
-   graphql is not tied to any specific server or client framework; it's a standalone library that can be used in various JavaScript environments.

# @apollo/server =>

-   This package is part of the Apollo ecosystem and is used for building GraphQL servers in Node.js.
-   It provides tools and utilities to create and manage GraphQL schemas, handle incoming GraphQL requests, execute queries, and send responses.
-   @apollo/server is built on top of the popular express framework, making it easy to integrate GraphQL into existing Node.js web applications.
-   Overall, @apollo/server simplifies the process of creating and maintaining GraphQL servers in Node.js environments.

# What is GraphQL Schema?

-   A GraphQL schema is a fundamental concept in GraphQL.
-   It defines the structure of the data that clients can query and the operations they can perform. A schema in GraphQL typically consists of two main parts: typeDefs and resolvers.

# What are TypeDefs? (or Type Definitions)

-   Type definitions define the shape of the data available in the GraphQL API. They specify the types of objects that can be queried and the relationships between them.

# What are Resolvers?

-   Resolvers are functions that determine how to fetch the data associated with each field in the schema.
