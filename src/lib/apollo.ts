import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ovhc4m1f3v01w7h3eug5ew/master',
  cache: new InMemoryCache()
})