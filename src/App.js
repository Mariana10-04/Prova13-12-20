import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/pages/inicio/LandingPage';
import Cadastro from './components/pages/cadastro/Cadastro';
import Footer from './components/Footer';
import Lhama from './components/pages/erro404/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
     <Header />

     <Switch>
       <Route exact path="/">
         <LandingPage />
       </Route>
       <Route exact path="/cadastro">
         <Cadastro />
       </Route>
       <Route exact path="*">
         <Lhama />
       </Route>

     </Switch>
     
     <Footer />

   </div>
    
    </BrowserRouter>
  ) 
}

export default App;
