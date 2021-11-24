import Header from "./components/Header";
import { Video } from "./components/Video";
import Services from "./components/Services";
import Whyus from "./components/Whyus";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Video />
      <Services />
      <Whyus />
    </div>
  );
};

export default App;
