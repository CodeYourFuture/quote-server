

function App() {
  const URL = "http://localhost:5000/quotes";
  fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data));
  return (
    <div className="App">
      app
    </div>
  );
}

export default App;
