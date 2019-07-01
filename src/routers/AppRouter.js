import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from '../components/App';
import VideosPage from '../components/VideosPage';
import VideoInfo from '../components/VideoInfo';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
<Router history={history}>
    <div>
        <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/videos" component={VideosPage} />
            <Route path="/video/:id" component={VideoInfo} />
            <Route component={NotFoundPage} />
        </Switch>    
    </div>
</Router>
);

export default AppRouter;