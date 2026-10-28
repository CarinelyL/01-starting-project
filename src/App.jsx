import Header from './components/Header/Header.jsx'; //To get the file in a different folder
// import UserData from './assets/UserData.jsx';  //To get the file in the same folder 
import Examples from './components/Examples/Examples.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';

//Project using React; 
function App() {
  //useState(); //Allows the change in page

   return (
    <> {/*Changed div to Fragment, or just put <> */}
      <Header /> {/*Calls function Header */}
      <main>
        <CoreConcepts/> {/*Load coreconcepts now*/}
        <Examples/>
      </main>
    </> //Write Fragment or just leave it as </> 
  );
}
export default App;
