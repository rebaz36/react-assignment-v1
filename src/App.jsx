import "./App.css";
import Filter from "./components/filter/Filter";
import Header from "./components/header/Header";
import List from "./components/list/List";
import StoreProvider from "./context/Provider";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Filter />
        <Header />
        <List />
      </div>
    </StoreProvider>
  );
}

export default App;
