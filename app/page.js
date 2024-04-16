"use client"
import React from 'react'
import AddBooks from '../components/AddBooks'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4500/graphql',
  cache: new InMemoryCache(),
});

const Welcome = () => {
  return (
    <>
    <ApolloProvider client={client}>

        <div className="container col-10 mx-auto mt-5">
            <h1 className="text-primary text-center">Welcome To The Best Story Book</h1>
            <h3 className="text-success text-center" >...write a short story and get paid</h3>
            {/* <AddBooks/> */}
        </div>
        <div className="container col-5 mx-auto mt-3">            
            <AddBooks/>
        </div>

    </ApolloProvider>
    </>
  )
}

export default Welcome