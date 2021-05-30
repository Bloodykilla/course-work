
import React from 'react';

const Line = () => {

    

    let colors = ["FF6495","F1B814","FF6A3D","05F4B7","05F4B7"]
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div className="line" style={{
            backgroundColor: '#' + `${randomColor}`
        }}>
        </div>
    )
}

export default Line
