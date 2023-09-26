import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import './styles/styles.css'

// JSX
const App = () => (
    <> 
           < Header/>
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);





// what React is doing behind the scenes
// const App = () => {
//     return React.createElement('h1', {id: 'title'}, 'Hello from H1', React.createElement('div',{className:'div' } ,'Hello from div'))
// };