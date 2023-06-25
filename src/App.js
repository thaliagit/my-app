import { Hello } from "./components/Hello";
import { Message } from "./components/Message";
import Welcome from "./components/Welcome";
import Age from "./components/Age";

function App() {
  return (
    <>
      {/* <Hello/>
      <Message/> */}
      <Welcome name= {<strong>Ted</strong>} age= {32} />
   </>
  );
}

export default App;
