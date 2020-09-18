import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-info">
  <a class="navbar-brand" href="/">COVID19</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/dampak">DAMPAK & PENCEGAHAN <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="/berita">BERITA</a> 
      <a class="nav-item nav-link" href="/kontak">GALERI & KONTAK</a>
    </div>
  </div>
</nav>
 <p><Utama /></p>
      </div>
    );
  }
}
export default App;