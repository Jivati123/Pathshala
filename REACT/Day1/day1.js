// const domRoot = document.getElementById('root');

// const newListContainer = document.createElement("ul");

// domRoot.appendChild(newListContainer);

// const item1 = document.createElement("li");
// item1.innerText = "ITEM 1"
// const item2 = document.createElement("li");
// item2.innerText = "ITEM 2"

// newListContainer.appendChild(item1);
// newListContainer.appendChild(item2);


{/* <ul>
    <li>..</li>
    <li>..</li>
</ul> */}


// const domRoot = document.getElementById("root");

// const ReactRoot = ReactDOM.createRoot(domRoot);

// const item1 = React.createElement("li", {}, "Item-1");    
// const item2 = React.createElement("li", {}, "Item-2");
// const ListContainer = React.createElement("ul", {}, item1, item2)
// ReactRoot.render(ListContainer)


//-----------------------------------------------------------------------

// const domRoot = document.getElementById('root');

// const ReactRoot = ReactDOM.createRoot(domRoot);


// const item1 = {
//     $$typeof: Symbol.for("react.element"),
//     type: "li",
//     key: null,
//     ref: null,
//     props: {
//         children: "Item - 1",
//         className :"Item1",
//     },
//     _owner: null,
//     _store: {},
// };

// const item2 = {
//     $$typeof: Symbol.for("react.element"),
//     type: "li",
//     key: null,
//     ref: null,
//     props: {
//         children: "Item - 2",
//     },
//     _owner: null,
//     _store: {},
// };

// const list = {
//     $$typeof: Symbol.for("react.element"),
//     type: "ul",
//     key: null,
//     ref: null,
//     props: {
//         children: [item1, item2],
//     },
//     _owner: null,
//     _store: {},
// };

// ReactRoot.render(list)

// //we do not prefer to write the code like this in our file. 

// //_____________________________________________________


// //JSX VERSION :


// import React from "react";
// import ReactDOM from "react-dom/client";

// const App = () => {
//   return (
//     <ul>
//       <li className="Item1">Item - 1</li>
//       <li>Item - 2</li>
//     </ul>
//   );
// };

// const domRoot1 = document.getElementById("root");
// const ReactRoot1 = ReactDOM.createRoot(domRoot1);

// ReactRoot.render(<App />);




//___________________________________________


//here we dont want so unorganised way of code and at the same time to write this long objects at the same time, so we will use better way instead of writing the objects of our oen in the code. 

// const Title = React.createElement("h1", {}, "Title");
// const Description = React.createElement("p", {}, "Description");
// const div = React.createElement("div", {}, [Title, Description]);

// ReactRoot1.render(div);  //react root should have only one element and that is the reason that we have 2 children of div and we are going to print the parent after creating all three and passing both the childer to the parent elements attributes 


//___________________________________________


const Card1 = (
    <div className="card">
        <h1>Title</h1>
        <p>Description</p>
    </div>
);
const Card2 = (
    <div className="card">
        <h1>NAME</h1>
        <p>Description</p>
    </div>
);
const Card3 = (
    <div className="card">
        <h1>JOB TITLE</h1>
        <p>Description</p>
    </div>
);
const Card4 = (
    <div className="card">
        <h1>HOBBIES</h1>
        <p>Description</p>
    </div>
);

const container = (
    <div>
        {Card1},
        {Card2},
        {Card3},
        {Card4},
    </div>
)


const domRoot1 = document.getElementById("root");
const ReactRoot1 = ReactDOM.createRoot(domRoot1);

ReactRoot1.render(container);
