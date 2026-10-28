import Header from './components/Header/Header.jsx'; //To get the file in a different folder
// import UserData from './assets/UserData.jsx';  //To get the file in the same folder
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './assets/data.js'; //Destructuring
import TabButton from './components/TabButton/TabButton.jsx';
import {useState} from 'react'; //Allows to use and modify state

//Project using React; 
function App() {
  //useState(); //Allows the change in page
  
  let [selectedTopic, setSelectedTopic] = useState('components');
    function handleSelect(selectedButton){
      console.log('Selected Button', selectedButton);
      setSelectedTopic(selectedButton);
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
            <TabButton isSelected={selectedTopic === 'components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={()=>handleSelect('jsx')}> JSX </TabButton>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={()=>handleSelect('props')}> Props </TabButton>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={()=>handleSelect('state')}> State </TabButton>
          </menu>
          {!selectedTopic ? <p>Please select topic</p>: (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title} </h3>
            <p>{EXAMPLES[selectedTopic].description} </p>
            <pre>
              <code> 
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          )}
        </section>
      </main>
    </div>
  );
}
export default App;
