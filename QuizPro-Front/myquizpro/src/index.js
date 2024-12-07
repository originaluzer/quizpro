import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizPage from './Pages/QuizPage';
import TakeQuiz from './Pages/TakeQuiz';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/quiz",
    element: <QuizPage />
  },
  {
    path: "/take-quiz",
    element: <TakeQuiz/>
  },
  {
    path: "/sign-up",
    element: <Signup/>
  },
  {
    path: "/login",
    element: <Login/>
  },

  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>

);

