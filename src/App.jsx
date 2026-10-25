import Header from './components/Header.jsx'; //To get the file in a different folder
import UserData from './UserData.jsx';  //To get the file in the same folder
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js'; //Destructuring

//Project using React; 
function App() {
  return (
    <div>
      <Header /> {/*Calls function Header */}
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
          <CoreConcept {... CORE_CONCEPTS[0]}/> {/*Spread Operator -- basically a shortcut for arrays */}
          <CoreConcept {... CORE_CONCEPTS[1]}/> {/*Takes the data from the array/object and places the data*/}
          <CoreConcept {... CORE_CONCEPTS[2]}/>
          <CoreConcept {... CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}
  
export default App;
