import { render } from 'react-dom';
import { App } from './App';
import './styles/global.scss';

const rootElement = document.getElementById('root');
render(<App />, rootElement);
