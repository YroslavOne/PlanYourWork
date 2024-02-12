import "./App.css";
import { ContextProvider } from "./Context";
import TabTimer from "./timer/TabTimer";

function App() {
  return (
    <div className="App">
    <ContextProvider>
      <TabTimer />
    </ContextProvider>
    </div>
  );
}

export default App;
