import React, {useState, useEffect} from 'react';

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
  const {loading, error, data} = useQuery(GET_NOTES);
  if (loading) return <p>Loading...</p>;

  // If there's an error, display an error message
  if (error) return <p>Error: {error.message}</p>;

  // Log the data to the console
  console.log(data);

  return (
    <>
      <div>
        {data.noteFeed.notes.map(note => (
          <div key={note._id}>
            <p>{note.author.username}</p>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </> 
  );
};

export default Home;