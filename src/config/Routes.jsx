import React from 'react';
import HomePage from '../pages/HomePage';

import CitiesIndexPage from '../pages/CitiesIndexPage';
import ArticlePage from '../pages/ArticlePage';
import CityShowPage from '../pages/CityShowPage';
import { Switch, Route } from 'react-router-dom';
import CreateCity from '../pages/CreateCity';
import CityModel from '../models/CityModel'
import CreateArticlePage from '../pages/CreateArticlePage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage'
// import CityModel from '../models/CityModel';



function Routes(){
  
    return(
        <Switch>

        <Route path='/' exact component={HomePage}/>
          
        {/* <Route path='/cities/:id' exact component={CityShowPage} /> */}


        <Route exact path='/cities/:id/create' component={CreateArticlePage} />
        <Route exact path='/cities/:cityId/:articleId'render={(props)=> <ArticlePage {...props} />} />
        
        
        <Route exact path='/cities/:id'render={(props)=> <CityShowPage {...props} />} />
        
        <Route path='/cities' component={CitiesIndexPage} />

        {/* <Route path='/cities/:id' exact render={()=>{
          <CityShowPage cityData={cityData}/>}} /> */}

        

        <Route path='/create' component={CreateCity} />

        <Route path='/signup' render={(props) => <SignupPage {...props} /> } />

        <Route path ='/login' render={(props) => <LoginPage {...props} /> } />

      </Switch>
        
    )
}

export default Routes;