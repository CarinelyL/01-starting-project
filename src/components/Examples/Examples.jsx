import { EXAMPLES } from "../../assets/data";
import TabButton from "../TabButton/TabButton";
import {useState} from 'react'; //Allows to use and modify state;

export default function Examples(){
    let [selectedTopic, setSelectedTopic] = useState();
        function handleSelect(selectedButton){
          console.log('Selected Button', selectedButton);
          setSelectedTopic(selectedButton);
        }

    return (
        <section id="examples">
                  <h2>Examples </h2>
                  <menu>
                    <TabButton isSelected={selectedTopic === 'components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} onSelect={()=>handleSelect('jsx')}> JSX </TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} onSelect={()=>handleSelect('props')}> Props </TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} onSelect={()=>handleSelect('state')}> State </TabButton>
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
    );
}