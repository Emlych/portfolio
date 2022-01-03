import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-main">
        <Main />
      </div>
    </div>
  );
}

export default App;
