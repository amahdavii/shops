import Head from 'next/head'
import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'src/store/configStore'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import { BaseUrl } from '../api/api'
import { cache } from '../apollo/cache';
// Initialize ApolloClient
const client = new ApolloClient({
  cache,
  uri: BaseUrl,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store} >
        {/* <ApolloProvider client={client}> */}
          <Head>
            <title>آلین لند شاپس</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
          {/* </ApolloProvider> */}
      </Provider>
   </>
  )
}

export default MyApp
