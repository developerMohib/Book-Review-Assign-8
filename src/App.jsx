import "./App.css";
import Root from "./assets/Component/Root/Root";
import { HelmetProvider } from 'react-helmet-async';
function App() {
  return (
    <>
      <HelmetProvider>
        <Root> </Root>
      </HelmetProvider>
    </>
  );
}

export default App;
