import { Container } from "react-bootstrap";
import Navbar from "./Component/Navbar";
import AppLabel from "./Component/AppLabel";
import AppForm from "./Component/AppForm";
import AppAction from "./Component/AppActions";
import { Data } from "./Component/AppData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const App = ({ children }) => {
  const notify = (message, type) => {
    switch (type) {
      case "success":
        return toast.success(message,{
          autoClose:500
        });
      case "error":
        return toast.error(message,{
          autoClose:500
        });
      default:
        return null;
    }
  };
  const [person, setPerson] = useState(Data);
  const showData = () => {
    setPerson(Data);
    notify("Data Showed Successfly", "success");
  };
  const deleteData = () => {
    setPerson([]);
    notify("Data Deleted Successfly", "error");
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
