import { Route, Switch } from 'react-router-dom';
import {useState} from 'react';
import {UserContext} from './contexts/User';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Header from './components/Header';
import Categories from './components/Categories';
import Reviews from './components/Reviews';
import SingleReview from './components/SingleReview';
import Comments from './components/Comments';
import Users from './components/Users';
import CreateComment from './components/CreateComment';
import Delete from './components/Delete';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';
import SortBy from './components/SortBy';
import SingleComment from './components/SingleComment';

function App() {
  const [user,setUser] = useState(
    {
    "username": "who",
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

        <Route exact path="/categories">
          <Categories />
        </Route>

        <Route exact path="/reviews/category/:category">
          <Categories />
        </Route>

        <Route exact path="/reviews/sort_by">
          <SortBy />
        </Route>

        <Route exact path="/reviews/:review_id">
          <SingleReview loginUser={user}/>
        </Route>

        <Route exact path ="/reviews/:review_id/comments">
          <Comments />
        </Route>

        <Route exact path ="/users">
        <Users setUser={setUser} />
        </Route>

        <Route exact path ="/reviews/:review_id/comments/add">
          <CreateComment user={user}/>
        </Route>

      <Route exact path="/comments/:comment_id">
        <Delete user={user}/>
      </Route> 

      <Route exact path="/:comment_id">
        <SingleComment user={user}/>
      </Route> 

      <Route path="/">
      <NotFoundPage />
      </Route>    

      </Switch>
      <Footer />

    </div>
    </UserContext.Provider>
  );
}

export default App;
