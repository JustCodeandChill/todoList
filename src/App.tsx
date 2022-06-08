import React, { useState } from "react";
import { SIDE_LIST_HEADER, LIST_DATA } from "./constants/index";

const App = (): JSX.Element => {
  const [list, setList] = useState(LIST_DATA);
  return (
    <>
      <article>
        <header>{SIDE_LIST_HEADER}</header>
        <section>
          <ul>
            {list.map((listItem, index) => {
              return <li key={index}>{listItem}</li>;
            })}
          </ul>
        </section>
      </article>
    </>
  );
};

export default App;
