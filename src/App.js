import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import NavBar from './components/NavBar';
import AllPostsView from './views/AllPostsView';
import SinglePostView from './views/SinglePostView';
import SingleTopicView from './views/SingleTopicView';
import LoginView from './views/LoginView';
import SignUpView from './views/SignUpView';
import AddPostView from './views/AddPostView';
import AuthRoute from './components/AuthRoute';
import EditCommentsView from './views/EditCommentsView';
import AdminRoute from './components/AdminRoute';
import EditPostsView from './views/EditPostsView';
import './App.css';
import TopicsView from "./views/TopicsView";
import AdminHomeView from "./views/AdminHomeView";
import EditTopicsView from "./views/EditTopicsView";
import NotAuthRoute from "./components/NotAuthRoute";
import NotAuthTestView from "./NotAuthTestView";
import NASinglePostView from "./views/NASinglePostView";
import NATopicsView from "./views/NATopicsView";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeView}/>
        <Route exact path="/posts" component={AllPostsView}/>
        <AuthRoute exact path="/posts/:_id" component={SinglePostView}/>
        <Route exact path="/topic/:_id" component={SingleTopicView}/>
        <NotAuthRoute exact path="/topicslist/:_id" component={SingleTopicView}/>
        <Route exact path="/login" component={LoginView}/>
        <Route exact path="/signup" component={SignUpView}/>
        <Route exact path="/topics" component={TopicsView}/>
        <NotAuthRoute exact path="/topicslist" component={NATopicsView}/>
        <AuthRoute exact path="/createpost" component={AddPostView}/>
        <AdminRoute exact path="/admin" component={AdminHomeView}/>
        <AdminRoute exact path="/editcomments" component={EditCommentsView}/>
        <AdminRoute exact path="/editposts" component={EditPostsView}/>
        <AdminRoute exact path="/edittopics" component={EditTopicsView}/>
      </Switch>
    </BrowserRouter>

  ) 
}

export default App;
