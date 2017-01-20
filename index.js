const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(/* GraphQL */`
  type Query {
    foo: String
  }

  type Schema {
    query: Query
  }
`)

const resolvers = {
  foo: () => ':)'
}

const query = `
query myFirstQuery {
  foo
}`

graphql(schema, query, resolvers)
  .then((result) => console.log(result))
  .catch((e) => console.log(e))
