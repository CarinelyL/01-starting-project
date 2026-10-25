//props allows you to pass data through components
function CoreConcept({title, description, image}){ {/*Destructuring props*  -- props = {title, description, image}*/}
    return(
        <li>
            <img src = {image} 
                alt= {title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );

}

export default CoreConcept;