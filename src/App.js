import Header from "./components/Header";
import { Video } from "./components/Video";
import Services from "./components/Services";
import Whyus from "./components/Whyus";
import Whychange from "./components/Whychange";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Video />
      <Services />
      <Whyus />
      <Whychange />
    </div>
  );
};

export default App;
