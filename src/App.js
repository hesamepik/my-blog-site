import { gql } from '@apollo/client';

import { useQuery } from '@apollo/client';
import Header from './components/layout/Header.js';
const Query = gql`
  query {
     authors {name}
  }
`;
function App() {
  const { loading, error, data } = useQuery(Query);
  console.log(loading,data,error)
  return (

  <Header />
  );
}

export default App;
