const { graphql, buildSchema } = require('graphql')

const data = {
  projects: [
    {id: 1, name: 'Drogia'},
    {id: 2, name: 'Projector'},
    {id: 3, name: 'Sranda'}
  ]
}

const schema = buildSchema(/* GraphQL */`
  type Query {
    projects: [Project]
  }

  type Schema {
    query: Query
  }

  type Project {
    id: Int,
    name: String
  }
`)

const resolvers = {
  projects: () => data.projects,
}

const query = `
query myFirstQuery {
  projects {
    id
  }
}`

graphql(schema, query, resolvers)
  .then((result) => console.log(JSON.stringify(result)))
  .catch((e) => console.log(e))
