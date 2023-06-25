import { Hello } from "./components/Hello";
import { Message } from "./components/Message";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      {/* <Hello/>
      <Message/> */}
      <Welcome name= "Ted" age= {30}/>
   </>
  );
}

export default App;
