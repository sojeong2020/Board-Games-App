import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Nav from './components/Nav';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/reviews">
        <Reviews />
        </Route>

        <Route exact path="/categories">
        <Categories />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
