import React from "react";
import { useParams } from "react-router";

const Routing = ()=>{
    //
    const{ num } = useParams();
    const{ color1 } = useParams();
    const{ color2 } = useParams();
    const{ hello } = useParams();

    return (
        <div style = {{backgroundColor:  color1 }}>
            {
                isNaN(num)?
                    "":
                    <h1>The number is: {num}</h1>
            }
        </div>
    )

}

export default Routing;