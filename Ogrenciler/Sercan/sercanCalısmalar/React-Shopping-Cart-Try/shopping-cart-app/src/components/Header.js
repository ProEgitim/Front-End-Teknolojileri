import React from 'react';

export default function Header (props){
    return(
        <header className='row block center'>
           <div>
               <a href='#/'>
                    <h1>Small Shoppping Cart</h1>
               </a>
           </div>
           <div>
               <a href='#/cart'>Cart</a> <a href='#/singin'>SignIn</a>  
               
           </div>
        </header>

    );
}