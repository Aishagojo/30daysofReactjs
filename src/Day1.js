 Day1.js 
/// -start with capital letters
///- must return Jsx (html)
// -always close tag
///- import  or logic
///  every time you think about  Componnent think  About function
/// calling function under the hood
///------JSX rules  ----////
//- return single element
//-semantic section/article
//-fragment - lets us group elements without adding extre nodes
//- all the element that are self closing must have closing tag />//
/// -camelCase propery naming convention
//  for example (tableIndex)
// linke class it will look like this className 
// -----Nest componens --//
//if you dont provide the props event structure your accessing it you have nothing

import React from 'react'
import ReactDOM from  'react-dom/client'
import './index.css';


const Firstbook = {
 title :  "The Woman in Me",
author : " by Britney Spears (Author)",
img :"https://images-na.ssl-images-amazon.com/images/I/61KI7oL-u9L._AC_UL900_SR900,600_.jpg",
 };

const Secondtbook = {
    title :  "Spare Hardcover",
   author : " by Prince Harry The Duke of Sussex (Author)",
   img :"https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL900_SR900,600_.jpg",
    };

const Thirdbook = {
        title :  "Atomic Habits",
       author : "by James Clear (Author) ",
       img :"https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL900_SR900,600_.jpg",
        };

const BookList = () =>{
    return  <section  className='BookList'>
        <Book Author={Firstbook.author} title={Firstbook.title} img={Firstbook.img}/>
        <Book Author={ Secondtbook.author} title={ Secondtbook.title} img={Secondtbook.img}/>
        <Book Author={Thirdbook.author} title={Thirdbook.title} img={Thirdbook.img}/>

    </section>
}
const Book = ({img, author ,  title }) => {
    return (
    <article className='Book'>
       <img src={img} />
       <h2>{title}</h2>; 
       <h4>{ author}</h4>
    
    </article>
    );
};

const root  = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList/>)