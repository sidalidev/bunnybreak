import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ApolloClient, InMemoryCache, HttpLink, gql } from 'apollo-boost'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'

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
type BunnyType = { id: string; name: string }
function App() {
  const { loading, error, data } = useQuery(BUNNIES_QUERY)

  return (
    <View style={styles.container}>
      {loading && <Text>⏳Loading...</Text>}
      {error && <Text>🚨Error...</Text>}
      <View>
        {data &&
          data.bunnies.map(({ id, name }: BunnyType) => {
            return <Text key={id}>{name}</Text>
          })}
      </View>
    </View>
  )
}
export default function Root() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
