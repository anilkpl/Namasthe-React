
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World"
// document.getElementById("root").appendChild(heading);

{/* <div id="parent">
    <div id="child">
        <h1>Hello World React</h1>
        <h2>NaMasthe React</h2>
    </div>
</div> */}

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        'div',
        {id:"child"},
        [
        React.createElement("h1",{},"Hellow world React"),
        React.createElement("h2",{},"Namasthe React")
        ]
    )
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)