import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Header from './components/Header';
import Reviews from './components/Reviews';
import SingleReview from './components/SingleReview';
import Comments from './components/Comments';

function App() {

  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>

        <Route exact path="/reviews">
        <Reviews />
        </Route>

       <Route exact path="/reviews/category/:category">
        <Reviews />
        </Route>

        <Route exact path="/reviews/:review_id">
          <SingleReview />
        </Route>

        <Route exact path ="/reviews/:review_id/comments">
          <Comments />
        </Route>

       </Switch>
    </div>
  );
}

export default App;
