// Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateBunny {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Bunny {
  id: ID!
  name: String!
  category: String!
}

type BunnyConnection {
  pageInfo: PageInfo!
  edges: [BunnyEdge]!
  aggregate: AggregateBunny!
}

input BunnyCreateInput {
  id: ID
  name: String!
  category: String!
}

type BunnyEdge {
  node: Bunny!
  cursor: String!
}

enum BunnyOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  category_ASC
  category_DESC
}

type BunnyPreviousValues {
  id: ID!
  name: String!
  category: String!
}

type BunnySubscriptionPayload {
  mutation: MutationType!
  node: Bunny
  updatedFields: [String!]
  previousValues: BunnyPreviousValues
}

input BunnySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BunnyWhereInput
  AND: [BunnySubscriptionWhereInput!]
  OR: [BunnySubscriptionWhereInput!]
  NOT: [BunnySubscriptionWhereInput!]
}

input BunnyUpdateInput {
  name: String
  category: String
}

input BunnyUpdateManyMutationInput {
  name: String
  category: String
}

input BunnyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  AND: [BunnyWhereInput!]
  OR: [BunnyWhereInput!]
  NOT: [BunnyWhereInput!]
}

input BunnyWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBunny(data: BunnyCreateInput!): Bunny!
  updateBunny(data: BunnyUpdateInput!, where: BunnyWhereUniqueInput!): Bunny
  updateManyBunnies(data: BunnyUpdateManyMutationInput!, where: BunnyWhereInput): BatchPayload!
  upsertBunny(where: BunnyWhereUniqueInput!, create: BunnyCreateInput!, update: BunnyUpdateInput!): Bunny!
  deleteBunny(where: BunnyWhereUniqueInput!): Bunny
  deleteManyBunnies(where: BunnyWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  bunny(where: BunnyWhereUniqueInput!): Bunny
  bunnies(where: BunnyWhereInput, orderBy: BunnyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bunny]!
  bunniesConnection(where: BunnyWhereInput, orderBy: BunnyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BunnyConnection!
  node(id: ID!): Node
}

type Subscription {
  bunny(where: BunnySubscriptionWhereInput): BunnySubscriptionPayload
}
`