import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './Home'
import Search from './Search'


const Drawer = createDrawerNavigator();

function Routes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
            name="Home"
            component={Home}
            />
            <Drawer.Screen
            name="Search"
            component={Search}
            />
           
        </Drawer.Navigator>
    )
}

export default Routes;