import React from 'react';
import HomePage from '../pages/HomePage';

import CitiesIndexPage from '../pages/CitiesIndexPage';
import ArticlePage from '../pages/ArticlePage';
import CityShowPage from '../pages/CityShowPage';
import { Switch, Route } from 'react-router-dom';
import CreateCity from '../pages/CreateCity';
import CityModel from '../models/CityModel'
import CreateArticlePage from '../pages/CreateArticlePage';


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

      </Switch>
        
    )
}

export default Routes;