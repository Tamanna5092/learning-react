import Avatar from "./components/Avatar";
import Button from "./components/2/Button";
import Clock from "./components/Clock";
import Drinks from "./components/Drinks";
import Image from "./components/Image";
import List from "./components/List";
import PackingList from "./components/Packing";
import Peoples from "./components/Peoples";
import Poem from "./components/Poem";
import Profile from "./components/Profile";
import Recipe from "./components/Recipe";
import Task from "./components/Task";
import TeaSet from "./components/TeaSet";
import Propagation from "./components/2/Propagation";
import ChangeSwitch from "./components/2/ChangeSwitch";
import Gallery from "./components/2/Gallery";
import MovingDot from "./components/2/MovingDot";
import Form from "./components/2/From";
import Form1 from "./components/2/From1";
import AddList from "./components/2/AddList";
import InputWithState from "./components/2/InputWithState";

function App() {
  const statues = ["empty", "typing", "submitting", "success", "error"];
  return (
    <>
      {statues.map((status) => (
        <InputWithState key={statues} status={status}></InputWithState>
      ))}
    </>
  );
}

export default App;
