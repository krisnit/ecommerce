import React from 'react';
import './Menuitem.scss'
import {withRouter} from 'react-router-dom'

const Menuitem = (props) => {
    return ( 
        <div className={`menu-item ${props.size}`}>
        <div className='backgroundImage'
         style={{backgroundImage: `url(${props.imageUrl})`}}></div>
        <div  onClick={()=>props.history.push('/shop/'+props.title)}
         className='content'>
        <h1 className='title'>{props.title}</h1>
        <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
     );
}
 
export default withRouter(Menuitem);