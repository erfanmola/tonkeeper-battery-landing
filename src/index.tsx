import './app.scss';
import './rlottie/rlottie';

import { Route, Router } from '@solidjs/router';

import Home from './routes/Home';
/* @refresh reload */
import { render } from 'solid-js/web';

const root = document.getElementById('root');

render(() => (
    <Router>
        <Route path="/" component={Home} />
    </Router>
), root!)
