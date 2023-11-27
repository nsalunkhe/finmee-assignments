import './App.css';
import {ChakraProvider} from "@chakra-ui/react"
import Logo from './Components/Logo';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Logo/>
     </ChakraProvider>
    </div>
  );
}

export default App;
