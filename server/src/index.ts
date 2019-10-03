import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import { Context } from './utils'

const resolvers = {
  Query: {
    bunnies(parent, args, context: Context) {
      return context.prisma.bunnies()
    },
    bunny(parent, { id }, context: Context) {
      return context.prisma.bunny({ id })
    }
  },
  Mutation: {
    createBunny(parent, { name, category }, context: Context) {
      return context.prisma.createBunny({ name, category })
    },
    deleteBunny(parent, { id }, context: Context) {
      return context.prisma.deleteBunny({ id })
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma }
})
server.start(() => console.log('Server is running on http://localhost:4000'))
