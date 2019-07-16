import React from 'react';

/*
  Todo: Make this bar a progress bar on the blog side.
        that determines shows how much longer in the post you've got.
  Todo: Save on the backend the % of how far you got in componentDidUnmount or similar pageclosing script.
*/

const lineStyle = {
  border: "2px solid #6057E5",
  position: "sticky",
  top: "50px",
  bottom: 0,
}

function Bar() {
  return (
      <hr style={lineStyle}/>
  );
}

export default Bar;