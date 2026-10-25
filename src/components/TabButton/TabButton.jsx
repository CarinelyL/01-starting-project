//Another way to write a function
export default function TabButton({children}){
    function handleClick(){
        console.log('Hello World!');
    }
    
    return(
        <li>
            <button onClick = {handleClick} > 
                {children}
            </button>
        </li>
    );
}

/*There are two ways to use the props here. Use props as a parameter, then set the props.children or put children in the parameter
remember destructuring*/
