
function App() {
  //let randomData;
  fetch('http://localhost:5000/quotes/random').then(res => {
    res.json();
  }).then(data => {
    //randomData = data
    console.log(data)
  })
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;
