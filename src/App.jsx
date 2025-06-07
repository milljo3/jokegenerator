import './App.css'
import useJoke from "./hooks/useJoke.jsx";
import JokeCard from "./components/JokeCard.jsx";

function App() {
  const {joke, loading, error, refresh} = useJoke();


  /*Could make some of these components*/
  return (
      <>
        <h1>Joke Generator</h1>
        {loading && <h2>Loading...</h2>}
        <div className="joke">
          {(joke && !loading) && <JokeCard joke={joke} />}
          {!loading && <button onClick={refresh} className="joke-button">Refresh Joke</button>}
        </div>
        {error && <p>{error}</p>}
      </>
  )
}

export default App
