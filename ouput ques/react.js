// sir main problem is that ki a ES6 he or hum ES5 ki syntax se jada familiar he. because ES6 syntax is little bit different from ES5 syntax. like if we want to create state in es5 then we use=>
// var App = React.createClass({  
//     getInitialState: function() {  
//         return { name: 'world' };  
//     },  
//     render: function() {  
//         return(  
//           <h3>Hello, {this.state.name}!</h3>  
//         );  
//     }  
// });  
   
// But in  ES6  we use=>
// class App extends React.Component {  
//     constructor() {  
//         super();  
//         this.state = { name: 'world' };  
//     }  
//     render() {  
//         return(  
//           <h3>Hello, {this.state.name}!</h3>  
//         );  
//     }  
// }
// const Form = ({fName,lName,email,phone}) => {

//     const [data, setData] = useState({
//         fName : fName,
//         lName : lName,
//         email : email,
//         phone : phone
//     })
//     return (
//     <form className="form-container">
//     <label>
//     fName
//         <input type="text" value={fName}></input>
//     </label>

//     </form>
//     )
// }
// https://github.com/iamparthaonline/functionup-react-js-learning-pr
