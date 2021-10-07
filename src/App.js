import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AllPostsView from './views/AllPostsView';
import SinglePostView from './views/SinglePostView';
import SingleTopicView from './views/SingleTopicView';
import LoginView from './views/LoginView';
import SignUpView from './views/SignUpView';
import AddPostView from './views/AddPostView';
import AuthRoute from './components/AuthRoute';
import TestCommentView from './views/TestCommentView';
import EditCommentsView from './views/EditCommentsView';
import AdminRoute from './components/AdminRoute';
import EditPostsView from './views/EditPostsView';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeView}/>
        <Route exact path="/posts" component={AllPostsView}/>
        <Route exact path="/posts/:_id" component={SinglePostView}/>
        <Route exact path="/topic/:_id" component={SingleTopicView}/>
        <Route exact path="/login" component={LoginView}/>
        <Route exact path="/signup" component={SignUpView}/>
        <AuthRoute exact path="/createpost" component={AddPostView}/>
        <AdminRoute exact path="/editcomments" component={EditCommentsView}/>
        <AdminRoute exact path="/editposts" component={EditPostsView}/>
        <AuthRoute exact path="/testcomment" component={TestCommentView}/>
      </Switch>
      <Footer />
    </BrowserRouter>

  ) 
}

export default App;
