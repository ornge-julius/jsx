// 1) Import the React and ReactDOM libraries and App component
import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from "./App";
=======
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 2fb81fa (first commit)

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

<<<<<<< HEAD
// 4) Show the component on the screen
root.render(<App />)
=======
// 5) Show the component on the screen
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
>>>>>>> 2fb81fa (first commit)
