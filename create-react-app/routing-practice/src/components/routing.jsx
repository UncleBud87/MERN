import React from "react";
import { useParams } from "react-router";

const Routing = ()=>{
    //
    const{ num } = useParams();
    const{ color1 } = useParams();
    const{ color2 } = useParams();

    return (
        <div style = {{backgroundColor: color1 }}>
            {
                isNaN(num)?
                    <h1 style= {{color: color2}}>The word is: {num}</h1>:
                    <h1 style= {{color: color1}}>The number is: {num}</h1>
            }
        </div>

    )

}

export default Routing;