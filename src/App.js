import "./App.css";
import "./Dictionary.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>

        <footer className="App-footer">
          <small>Coded By Kimberley Johnson</small>
        </footer>
      </div>
    </div>
  );
}
