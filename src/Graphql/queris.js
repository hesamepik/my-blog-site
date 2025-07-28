import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  
  query MyQuery {
  posts {
  id
    author
    title
    slug
    coverphto{url}
  }
}
`;

const GET_AUTHORS_INFO = gql`
  
query MyQuery {
  authors {
    id
    name
    coverphoto{
      url
    }
  }
}
`;
const GET_POST_INFO = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
    author
    coverphto {
      url
    }
    id
    slug
    title
    content{text}
  }
}
`;
const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
    id
      name
      text
    }
  }
`;


export { GET_BLOGS_INFO ,  GET_AUTHORS_INFO, GET_POST_INFO , GET_POST_COMMENTS };





















