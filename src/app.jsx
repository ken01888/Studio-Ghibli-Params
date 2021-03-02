import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Films from './views/Films.jsx'
import Filminfo from './views/Filminfo.jsx'
import People from './views/People'
import Person from './views/Person'
import Links from './components/Nav.jsx'
import Image from './components/image'


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Links />
                    <Image />
                </Route>
                <Route exact path="/films">
                    <Links />
                    <Films />
                </Route>
                <Route exact path="/films/:filminfo">
                    <Links />
                    <Filminfo />
                </Route>
                <Route exact path="/people">
                    <Links />
                    <People />
                </Route>
                <Route exact path="/people/:personinfo">
                    <Links />
                    <Person />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;