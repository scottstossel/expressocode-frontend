import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AllPostsView from './views/AllPostsView';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeView}/>
        <Route exact path="/posts" component={AllPostsView}/>
      </Switch>
      <Footer />
    </BrowserRouter>

  ) 
}

export default App;
