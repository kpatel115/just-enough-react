import React, { useEffect} from 'react';


const MyNotes = () => {
  useEffect(() => {
    // update doc title
    document.title = 'My Notes - Notedly';
  });
  return (
    <div>
     <h1>Notes</h1>
     <p>These are my notes</p> 
    </div>
  )
};

export default MyNotes
