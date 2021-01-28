import React from "react";

const functionalComponentDemo = () => {
  return (
    <div className="main">
      <div className="mainDiv">Functional Component</div>
      <p>
        Functional Components are the primary tool in React to build a small,
        modular piece of your page.
      </p>
      <dl>
        <dt>Can Use State</dt>
        <dd>
          With the 'useState' hook, functional components can now both render a
          display to the page and update the information to be shown.
        </dd>
        <dt>No 'this' keyword</dt>
        <dd>
          Older class components use 'this', functional components have no
          'this' object.
        </dd>
        <dt>Can use effects</dt>
        <dd>
          {" "}
          With the 'useEffect' hook, functional components can perform side
          effect with any props or state changes.
        </dd>
        <dt>Return ()</dt>
        <dd>
          Must return a single element, but this element may have nested
          elements inside.
        </dd>
      </dl>
    </div>
  );
};

export default functionalComponentDemo;
