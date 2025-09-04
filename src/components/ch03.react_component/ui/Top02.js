function App({ greeting, welcome }) {
  console.log("탑");

  return (
    <header>
      <h1>{greeting}</h1>
      <p>{welcome}</p>
    </header>
  );
}

export default App;