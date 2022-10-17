import React, { useState } from "react";
import EventList from "./components/EventList";
import Modal from "./components/Modal";
import NewEventForm from "./components/NewEventForm";
import Title from './components/Title';

function App() {
  const [showDatas, setShowDatas] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [datas, setDatas] = useState([
    { title: "Hello Welcome to react basic", id: 1 },
    { title: "This is Yeasin Rafee from codeVikings", id: 2 },
    { title: "Learning by doing", id: 3 },
  ]);

  const handleClick = (id) => {
    setDatas((prevData) => {
      return prevData.filter((data) => data.id !== id);
    });
  };

  const title = "Hey, I'm learning React";
  const subTitle = "Learning react is fun untill you understand";

  return (
    <div className="App">
      <Title title = {title} subTitle={subTitle}/>
      {showDatas && <div>
        <button onClick={() => setShowDatas(false)}>Hide Data</button>
      </div>}
      {!showDatas && <div>
        <button onClick={() => setShowDatas(true)}>Show Data</button>
      </div>}

       { showDatas && <EventList datas ={datas} handleClick={handleClick}/> }

      <div>
        <button onClick={()=> setShowModal(true)}>Show Modal</button>
      </div>
      {showModal && <Modal showModal={setShowModal}>
        <NewEventForm/>
      </Modal>}
    </div>
  );
}

export default App;
