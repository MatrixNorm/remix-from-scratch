import * as React from "react";
import { Scripts } from "remix";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <html>
      <head>
        <title>Remix App</title>
      </head>
      <body>
        <p>This is a remix app.</p>
        <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        <Scripts />
      </body>
    </html>
  );
}

export default App;
