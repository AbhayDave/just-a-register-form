import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen  bg-red-500 w-screen flex items-center justify-center">
        <Form setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </>
  );
}

export default App;
