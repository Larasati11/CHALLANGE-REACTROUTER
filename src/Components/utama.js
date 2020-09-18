import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import Dampak from './dampak';
import Berita from './berita';
import Kontak from './kontak';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda}/>
        <Route path="/dampak" component={Dampak}/>
        <Route path="/berita" component={Berita}/>
        <Route path="/kontak" component={Kontak}/>
        
    </Switch>
    
)
export default Utama;