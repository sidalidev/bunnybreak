import React from 'react'
import { StyleSheet } from 'react-native'
import { ApolloClient, InMemoryCache, HttpLink, gql } from 'apollo-boost'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'
import { mapping, light } from '@eva-design/eva'
import { ApplicationProvider, Layout, Text } from 'react-native-ui-kitten'
import { Bunny } from './server/src/generated/prisma-client'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  cache,
  link
})

const BUNNIES_QUERY = gql`
  {
    bunnies {
      id
      name
      category
    }
  }
`
function App() {
  const { loading, error, data } = useQuery(BUNNIES_QUERY)

  return (
    <Layout style={styles.container}>
      {loading && <Text>⏳Loading...</Text>}
      {error && <Text>🚨Error...</Text>}
      <Layout>
        {data &&
          data.bunnies.map(({ id, name }: Bunny) => (
            <Text key={id}>{name}</Text>
          ))}
      </Layout>
    </Layout>
  )
}
export default function Root() {
  return (
    <ApplicationProvider mapping={mapping} theme={light}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ApplicationProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
