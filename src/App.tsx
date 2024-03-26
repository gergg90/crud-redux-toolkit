import { Toaster } from "sonner";
import "./App.css";
import CreateUser from "./components/CreateUser";
import ListOfUsers from "./components/ListOfUser";

function App() {
  return (
    <>
      <CreateUser />
      <ListOfUsers />
      <Toaster richColors />
    </>
  );
}

export default App;
