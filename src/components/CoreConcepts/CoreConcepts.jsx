import { CORE_CONCEPTS } from "../../assets/data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts(){
    <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
          <CoreConcept {... CORE_CONCEPTS[0]}/> {/*Spread Operator -- basically a shortcut for arrays */}
          <CoreConcept {... CORE_CONCEPTS[1]}/> {/*Takes the data from the array/object and places the data*/}
          <CoreConcept {... CORE_CONCEPTS[2]}/>
          <CoreConcept {... CORE_CONCEPTS[3]}/>
          </ul>
        </section>
}