import Header from "./components/Header";
import { Video } from "./components/Video";
import Services from "./components/Services";
import Whyus from "./components/Whyus";
import Whychange from "./components/Whychange";
import Faq from "./components/Faq";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Video />
      <Services />
      <Whyus />
      <Whychange />
      <Faq />
    </div>
  );
};

export default App;
