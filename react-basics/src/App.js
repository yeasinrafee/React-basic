import React, { useState } from "react";
import EventList from "./components/EventList";
import Modal from "./components/Modal";
import NewEventForm from "./components/NewEventForm";
import Title from './components/Title';

function App() {
  const [showDatas, setShowDatas] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [datas, setDatas] = useState([]);

  const handleClick = (id) => {
    setDatas((prevData) => {
      return prevData.filter((data) => data.id !== id);
    });
  };

  const addNewData = (data)=>{
    setDatas((prevData) =>{
      return [...prevData, data];
    })
    setShowModal(false);
  }

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
        <NewEventForm addNewData = {addNewData} />
      </Modal>}
    </div>
  );
}

export default App;
