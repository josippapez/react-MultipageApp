import React from 'react';

function Rainbow(WrappedComponent){
    const colours=['red','pink','orange','blue','green','yellow'];
    const randomColour=colours[Math.floor(Math.random()*5)];
    const className=randomColour+'-text';
    return(porps)=>{
        return(
            <div className={className}>
                <WrappedComponent {...porps}/>
            </div>
        )
    }
}

export default Rainbow;