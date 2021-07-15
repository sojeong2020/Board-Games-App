import { Route, Switch } from 'react-router-dom';
import {useState} from 'react';
import {UserContext} from './contexts/User';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Header from './components/Header';
import Reviews from './components/Reviews';
import SingleReview from './components/SingleReview';
import Comments from './components/Comments';
import Users from './components/Users';
import CreateComment from './components/CreateComment';
import Delete from './components/Delete';

function App() {
  const [user,setUser] = useState(
    {
    "username": "mallionaire",
    "avatar_url": "haz",
    "name": "https://www.healthytherapies.com/wp-content/uploads/2016/06/Lime3.jpg"
    }
    );

  return (
    <UserContext.Provider value={{user,setUser}}>
    <div className="App">
      <Header user={user}/>
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

        <Route exact path ="/users">
        <Users setUser={setUser}/>
        </Route>

        <Route exact path ="/reviews/:review_id/comments/add">
          <CreateComment user={user}/>
        </Route>

      <Route exact path="/">
        <Delete />
      </Route>       

      </Switch>

    </div>
    </UserContext.Provider>
  );
}

export default App;
