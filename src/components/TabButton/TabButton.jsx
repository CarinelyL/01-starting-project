//Another way to write a function
export default function TabButton({children, isSelected, ...props}){
    return(
        <li>
            <button className = {isSelected ? 'active': ''} {...props} > 
                {children}
            </button>
        </li>
    );
}

/*There are two ways to use the props here. Use props as a parameter, then set the props.children or put children in the parameter
remember destructuring*/
