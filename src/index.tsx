import './app.scss';
import './lottie';

import { Route, Router } from '@solidjs/router';

import Home from './routes/Home';
import { MetaProvider } from "@solidjs/meta";
import NotFound from './routes/NotFound';
import { locales } from './locale';
/* @refresh reload */
import { render } from 'solid-js/web';

const root = document.getElementById('root');

render(() => (
    <MetaProvider>
        <Router>
            <Route path="/:lang?" component={Home} matchFilters={{ lang: new RegExp(`^(${locales.join('|')})$`) }} />
            <Route path="*404" component={NotFound} />
        </Router>
    </MetaProvider>
), root!)
