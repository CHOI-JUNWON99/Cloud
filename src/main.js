import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';
//import ReactDOM from 'react-dom';
//ReactDOM.render(<App/>, document.getElementById('app'));

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App/>);