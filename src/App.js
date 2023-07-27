import { Container } from "react-bootstrap";
import Navbar from "./Component/Navbar";
import AppLabel from "./Component/AppLabel";
import AppForm from "./Component/AppForm";
import AppAction from "./Component/AppActions";
import { Data } from "./Component/AppData";
import { useState } from "react";
const App = ({ children }) => {
  const [person, setPerson] = useState(Data);
  const showData = () => {
    setPerson(Data);
  };
  const deleteData = () => {
    setPerson([]);
  };
  return (
    <Navbar>
      <Container>
        <AppLabel person={person} />
        <AppForm person={person} />
        <AppAction showAll={showData} deleteAll={deleteData} />
      </Container>
    </Navbar>
  );
};

export default App;
