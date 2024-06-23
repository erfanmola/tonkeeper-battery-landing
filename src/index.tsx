import './app.scss';
import './rlottie-wasm.js'

import { Route, Router } from '@solidjs/router';

import Home from './routes/Home';
/* @refresh reload */
import { render } from 'solid-js/web';

// TODO: fallback support of lottie web
// TODO: register service worker

const root = document.getElementById('root');

render(() => (
    <Router>
        <Route path="/" component={Home} />
    </Router>
), root!)
