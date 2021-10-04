import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Friends from "./Friends/Friends";
import Home from "./Home/Home";
import About from "./About/About";
import NotFound from "./NotFound/NotFound";
import Header from "./Header/Header";
import FriendDetail from "./FriendDetail/FriendDetail";
import Culture from "./Culture/Culture";
import PostDetail from "./PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/about/culture">
            <Culture></Culture>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/post/:postId">
            <PostDetail></PostDetail>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
