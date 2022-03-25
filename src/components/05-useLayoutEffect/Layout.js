import React, { useLayoutEffect, useRef,useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import "./Layout.css";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const state = useFetch(url);
  const { data } = state;
  const { quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className="blockquote text-end">
        <p className="mb-2" ref={pTag}>
          {quote}
        </p>
      </blockquote>

      <pre>
          { JSON.stringify(boxSize,null,3)}
      </pre>

      <button className="btn btn-primary" onClick={increment}>
        siguiente quote
      </button>
    </div>
  );
};
