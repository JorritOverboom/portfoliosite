import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './root/Root.jsx';
import Home from './home/Home.jsx';
import Study from './study/Study.jsx';
import Resume from './resume/Resume.jsx';
import ToDoList from './to_do_list/ToDoList.jsx';
import Login from './login/Login.jsx'; 
import Signup from './signup/Signup.jsx';
import Profile from './profile/Profile.jsx';
import Menu from './menu/Menu.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root />} >
    <Route path='home' element={ <Home /> } />
    <Route path='study' element={ <Study /> } />
    <Route path='resume' element={ <Resume /> } />
    <Route path='to-do-list' element={ <ToDoList /> } />
    <Route path='log-in' element={ <Login /> } />
    <Route path='sign-up' element={ <Signup /> } />
    <Route path='profile' element={ <Profile /> } />
    <Route path='menu' element={ <Menu /> } />
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
