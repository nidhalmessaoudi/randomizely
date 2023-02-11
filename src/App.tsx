import { FormEvent, useState } from "react";

import Option from "./components/Option";

function App() {
  const [result, setResult] = useState<string | null>(null);

  function submitHandler(e: FormEvent) {
    e.preventDefault();

    const options: string[] = [];

    new FormData(e.target as HTMLFormElement).forEach((option) => {
      options.push(option as string);
    });

    setResult(randomize(options));
  }

  function randomize(options: string[]) {
    const optionIndex = Math.floor(Math.random() * options.length);

    return options[optionIndex];
  }

  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <Option id={1} />
        <Option id={2} />
        <button type="submit">Roll</button>
      </form>
      {result && <h2>{result}</h2>}
    </>
  );
}

export default App;
