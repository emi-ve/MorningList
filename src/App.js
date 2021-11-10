import logo from './logo.svg';
import './App.css';
import List from "./components/List.js";

function App(props) {
  return (
    <div className="morningList">
      <h1>Good Morning!</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-list-input" className="label__lg">
            What am I grateful for today?
          </label>
        </h2>
        <input
          type="text"
          id="new-list-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> Items</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> Items</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Past</span>
          <span className="visually-hidden"> Items</span>
        </button>
      </div>
      <h2 id="list-heading">
        3 items total
      </h2>
      <ul
        role="list"
        className="list-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <List name="Cat"/>
        <List name="Fuzzy Socks"/>
        <List name="Coffee" />
      </ul>
    </div>
  );
}

export default App;
