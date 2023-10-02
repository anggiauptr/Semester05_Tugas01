// // Hello
// let myElement = "Hello World";

// Basic Rules
// myElement = "<h3>Hello React</h3>"; // wrong
// let myElement = <h3>Hello React</h3>; // correct

// Basic Rules
// let myElement = <img src="https://placehold.co/600x400" >; // wrong
// let myElement = <img src="https://placehold.co/600x400" />; // correct

// Basic Rules
// myElement = (
//     <p>Learn Javascript</p>
//     <p>Learn React</p>
// // ); // wrong
// let myElement = (
//     <div>
//         <p>Learn Javascript</p>
//         <p>Learn React</p>
//     </div>
// ); // correct

// Statement in JSX
// let myText = "Learn React";
// let myElement = (
//     <div>
//         <h3>{myText}</h3>
//     </div>
// );

// Array Processing
let items = ["Table", "Handphone", "Computer"];
let myElement = (
    <ul>
        {items.map((item, index) => <li>{item}</li>)}
    </ul>
);

const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);
