import Counter from "./components/Counter"
import useToggle from "./hooks/useToggle"

function App() {
  const { showCounter, toggle } = useToggle();

  return (
    <div className="card">
      <h1>Academia React IBM MX</h1>
      <div className="card">
        <button onClick={toggle}>
          {showCounter ? "Hide" : "Show"} Counter
        </button>
        {showCounter && (
          <Counter />
        )}
      </div>
    </div>
  )
}

export default App
