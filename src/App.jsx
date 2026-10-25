import Header from './components/Header/Header.jsx'; //To get the file in a different folder
// import UserData from './assets/UserData.jsx';  //To get the file in the same folder
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS } from './assets/data.js'; //Destructuring
import TabButton from './components/TabButton/TabButton.jsx';

//Project using React; 
function App() {
    function handleSelect(){
      console.log('Hello World!');
    }
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
        <section id="examples">
          <h2>Examples </h2>
          <menu>
            <TabButton onClick={handleSelect}> Components </TabButton>
            <TabButton onClick={handleSelect}> JSX </TabButton>
            <TabButton onClick={handleSelect}> Props </TabButton>
            <TabButton onClick={handleSelect}> State </TabButton>
          </menu>
          ????
        </section>
      </main>
    </div>
  );
}
  
export default App;
