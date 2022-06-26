import React, { useState } from "react";
import { SIDE_LIST_HEADER, LIST_DATA } from "./constants/index";

interface Todo {
  id: number;
  todo: string;
}

const App = (): JSX.Element => {
  const [list, setList] = useState<Todo[]>(LIST_DATA);
  return (
    <>
      <article>
        <header>{SIDE_LIST_HEADER}</header>
        <section>
          <ul>
            {list.map(({ id, todo }): React.ReactElement => {
              return <li key={id}>{todo}</li>;
            })}
          </ul>
        </section>
      </article>
    </>
  );
};

export default App;
