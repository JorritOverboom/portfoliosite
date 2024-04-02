
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './root/Root.jsx';
import Home from './home/Home.jsx';
import Skills from './study/Skills.jsx';
import AboutMe from './resume/AboutMe.jsx';
import ToDoList from './to_do_list/ToDoList.jsx';
import Login from './login/Login.jsx'; 
import Signup from './signup/Signup.jsx';
import Menu from './menu/Menu.jsx';
import Travel from './travel/Travel.jsx';

// All the URL routes
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root />} >
    <Route path='/home' element={ <Home /> } />
    <Route path='/skills' element={ <Skills /> } />
    <Route path='/to-do-list' element={ <ToDoList /> } />
    <Route path='/about-me' element={ <AboutMe /> } />
    <Route path='/travel' element={ <Travel /> } />
    <Route path='/login' element={ <Login /> } />
    <Route path='/sign-up' element={ <Signup /> } />
    <Route path='/menu' element={ <Menu /> } />
  </Route>
));

function App() {
  return (
    <div className="App">
      <RouterProvider router={ router } />
    </div>
  );
}

export default App;
