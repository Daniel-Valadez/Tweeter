//import Backdrop from "./components/Backdrop";
import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Navbar from "./components/layout/navbar";
import Twit from "./components/section/twit";
import Button from "./components/Button";

//So now the data that will create the first twits seen on the page will be imported.
import twitData from "./twitData.json";

function App() {
  return (
    <div>
      <Navbar />
      <div className="twitContainer">
        {/*<h1>My Todos</h1>
      <Todo text='Learn React' /> 
      <Todo text='Crate a Calendar' /> 
      <Todo text='Finish this tutorial' /> 
      <Modal />  
      <Backdrop />*/}
        {[
          ...twitData.map((twitData) => {
            return <Twit text={twitData.text} author={twitData.author} />;
          }),
        ]}
      </div>
      <Button />
    </div>
  );
}

export default App;
