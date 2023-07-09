import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";



const AppRouter = () => {
const {isAuth, isLoading}=useContext(AuthContext)

    if (isLoading){
        return <Loader/>
    }

    return (
         <Switch>
             {privateRoutes.map( route=>
                <Route
                component={route.component}
                path={route.path}
                exact={route.exact}
                key={route.path}
                />
            )}
            <Redirect to='/posts'/>
        </Switch>
          
    );
};

export default AppRouter;