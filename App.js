import React from "react";
import ReactDOM  from "react-dom/client";

// react element -> object -> htmlelements
// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         'div',
//         {id:"child"},
//         [
//         React.createElement("h1",{},"Hellow world React"),
//         React.createElement("h2",{},"Namasthe React")
//         ]
//     )
//     );
// // jsx ->(babel)=> react element - object- html elements  

// const jsxParent = (<div id='parent'>
//     <div id='child'>
//         <h1>Hellow world React 🚀🚀</h1>
//         <h2>Namasthe React 🚀🚀</h2>
//     </div>
// </div>)
function Parent(){
    return (<div>
        <div>
            <h1>Hellow world React 🚀🚀</h1>
            <h2>Namasthe React 🚀🚀</h2>
        </div>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Parent />)