import { CORE_CONCEPTS } from "../../assets/data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts(){
    <section id="core-concepts" title="Time to get started">
      <h2>Time to get started!</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem)=><CoreConcept{...conceptItem}/>)}
        </ul>
    </section>
}
//<CoreConcept {... CORE_CONCEPTS[0]}/> *Spread Operator -- basically a shortcut for arrays *
//*Takes the data from the array/object and places the data*