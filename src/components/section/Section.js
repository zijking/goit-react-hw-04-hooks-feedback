import React from 'react';

function Section({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
}

export default Section;
