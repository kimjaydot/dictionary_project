import "./App.css";
import "./Dictionary.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>

        <footer className="App-footer">
          <small>Coded By Kimberley Johnson</small>
        </footer>
      </div>
    </div>
  );
}
