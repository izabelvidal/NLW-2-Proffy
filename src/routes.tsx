import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';

function Routes(){
    <BrowserRouter>
        <Route path="/" component={Landing}/>
    </BrowserRouter>
}

export default Routes;