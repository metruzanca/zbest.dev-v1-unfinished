import React from 'react';

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