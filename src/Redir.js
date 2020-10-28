
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import React, { Component } from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Home from './Home';
import Bachillers from './Bachillers';
import Galerias from './Galerias';
import Institucion from './Institucion';
import Secretaria from './Secretaria';

class Redir extends Component {

    render() {
        return (
            
            <Router>
            <div>
            <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/bachillers' component={Bachillers}/>
                    <Route path='/galerias' component={Galerias}/>
                    <Route path='/institucion' component={Institucion}/>
                    <Route path='/secretaria' component={Secretaria}/>
                </Switch>
                <Footer/>
                </div>
            </Router>
            
        );

    }

}

export default Redir;