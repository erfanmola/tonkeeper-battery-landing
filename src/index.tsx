import './app.scss';
import './rlottie/rlottie';

import { Route, Router } from '@solidjs/router';

import Home from './routes/Home';
import { locales } from './locale';
/* @refresh reload */
import { render } from 'solid-js/web';

const root = document.getElementById('root');

render(() => (
    <Router>
        <Route path="/:lang?" component={Home} matchFilters={{ lang: new RegExp(`^(${locales.join('|')})$`) }} />
    </Router>
), root!)
