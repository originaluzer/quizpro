import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google"
import QuizPage from './Pages/QuizPage';
import Hero from './Components/Hero';
import Hiw from './Components/Hiw';
import TakeQuiz from './Pages/TakeQuiz';
import Quiz from './Pages/Quiz';
import Signup from './Pages/Signup';

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
    path: "/signup",
    element: <Signup/>
  },

  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='67562386750-1gmpm3812nlihg3jma2f9pt2rc8pq85b.apps.googleusercontent.com '>
    <RouterProvider router={router}></RouterProvider>
  </GoogleOAuthProvider>

);

