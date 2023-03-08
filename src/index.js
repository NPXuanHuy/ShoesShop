import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from "./redux/configStore.jsx";
import { Provider } from 'react-redux';
import {BrowserRouter,Routes,Route,Navigate, unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import "./assets/scss/style.scss";
import HomeTemplate from './template/homeTemplate/HomeTemplate';
import Home from './pages/home/Home.jsx';
import { createBrowserHistory } from "history";
import Detail from './pages/detail/Detail.jsx';
import Carts from './pages/carts/Carts.jsx';
import Login from './pages/login/Login.jsx';

import Search from './pages/search/Search.jsx';
import Register from './pages/register/Register.jsx';
import MenuProfile from './components/menuProfile/MenuProfile.jsx';
export const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store = {store}>
    <HistoryRouter history={history}>
    <Routes>
      <Route path='' element={<HomeTemplate/>}>
        <Route index element={<Home/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='detail' >
          <Route path=':id' element={<Detail/>}/>       
        </Route>
        <Route path='carts' element={<Carts/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='profile' element={<MenuProfile/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='search' element={<Search/>}></Route>
        <Route path='*' element={<Navigate to=""/>}/>

      </Route>
    </Routes>
    </HistoryRouter>

  </Provider>
  </>
);

