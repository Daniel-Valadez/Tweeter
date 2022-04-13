//import Backdrop from "./components/Backdrop";
import Todo from "./components/Todo";
//import Modal from "./components/Modal";
import Navbar from "./components/layout/navbar"; 

function App() {
  return (
    <div>
      <Navbar /> 
      <h1>My Todos</h1>
      <Todo text='Learn React' /> 
      <Todo text='Crate a Calendar' /> 
      <Todo text='Finish this tutorial' /> 
      {/*<Modal />  
      <Backdrop />*/} 
    </div>
  );
}

export default App;
