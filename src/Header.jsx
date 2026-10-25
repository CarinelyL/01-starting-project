const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import reactImg from './assets/react-core-concepts.png';
function getRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}

//Object made -- think about it as a new method
function Header(){
  const description = reactDescriptions[getRandomInt(2)]; // Randomizes the words in the array made above
 return (
      <header>
        <img src= {reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p> 
      </header>
 )
}

export default Header;