import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Users from './class/Users.class';
// import User from './class/User.class';
import Encryption from './class/Encryption.class';
import Database from './class/Database.class';
import Sites from './class/Sites.class';
import Types from './class/Types.class';
import Animations from './class/Animations.class';
import Activities from './class/Activities.class';
import UserActivities from './class/UsersActivities.class';

window.classDatabase = new Database();
// window.classUser = new User();
window.classUsers = new Users();
window.classEncryption = new Encryption();
window.classSites = new Sites();
window.classTypes = new Types();
window.classAnimations = new Animations();
window.classActivities = new Activities();
window.classUserActivities = new UserActivities();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
