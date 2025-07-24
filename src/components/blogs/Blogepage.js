import React from 'react'
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import {GET_POST_INFO} from "../../Graphql/queris.js"
function Blogepage() {
    const {slug}=useParams();
    const { loading, data, errors } = useQuery(GET_POST_INFO, {
        variables: { slug },
      }); 
    console.log(data)
  return (
    <div>Blogepage</div>
  )
}

export default Blogepage