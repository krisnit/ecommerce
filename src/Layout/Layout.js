import React from 'react';
import './Layout.scss'
import { Route, Switch } from 'react-router-dom'
import '../Components/Menuitems/Menuitems'
import Menuitems from '../Components/Menuitems/Menuitems';
import Shop from '../Containers/Shop/Shop'

const hats = (props)=>{
    
return(
    <div>
        <button onClick={()=>props.history.push('/')}>Home</button>
        <h1>Hats page</h1>
    </div>
)}

const Layout = () => {
    return ( 
            <Switch>
            <Route path='/shop/hats' exact component={hats}/>
            <Route path='/shop' exact component={Shop}/>
            <Route path='/' exact component={Menuitems}/>
            </Switch>
     );
}
 
export default Layout;
