import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h2>Question And Answer</h2>
       <h5>1.How does react work?</h5>
       <p>Ans.ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application.</p>
       <h5>2.What are the differences between props and state?</h5>
       <p>Ans.Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
        </p>
       <h5>3.How the useEffect Hook Works?</h5>
        <p>Ans.The useEffect Hook allows you to perform side effects in your components.
        Some examples of side effects are: fetching data, directly updating the DOM, and timers.UseEffect accepts two arguments. The second argument is optional.useEffect hook must declare inside the component, it will give several advantages.It will have accessibility to those data that are required to use in side effects.It can also update the data later, based on the dependencies and changes.</p>
        </div>
    );
};

export default Question;