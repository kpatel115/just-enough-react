import React from 'react';

import { useQuery, gql } from '@apollo/client';
const GET_NOTES = gql`
query noteFeed($cursor: String) {
  noteFeed(cursor: $cursor) {
    cursor
    hasNextPage
    notes {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
}
`;

const Home = () => {
  // useQuery Apollo React Hook
  const { data, loading, error } = useQuery(GET_NOTES);

  // if data is loading display message
  if(loading) return <p>Loading...</p>;
  // if error fetching data, display message
  if(error) return <p>Error!</p>;
  // If data is successful, display Data to Client UI
  return (
    <div>
      {/* <h1 className=''>Notedly - Welcome</h1>
      <p>This is the home page</p> */}
      {console.log(data)}
      <h3>Data has been loaded</h3>
      <div>
        {data.noteFeed.notes.map(note => (
          <div key={note.id}>{note.author.username}</div>
        ))}
      </div>
    </div>
  )
}

export default Home;