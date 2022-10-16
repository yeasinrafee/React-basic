import React, { useState } from "react";
import Modal from "./components/Modal";
import Title from './components/Title';

function App() {
  const [showDatas, setShowDatas] = useState(true);
  const [showModal, setShowModal] = useState(true);
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
      {showDatas && datas.map((data) => (
        <React.Fragment key={data.id}>
          <h2>{data.title}</h2>
          <button onClick={() => handleClick(data.id)}>Delete</button>
        </React.Fragment>
      ))}
      {showModal && <Modal showModal={setShowModal}>
        <h2>This is my first modal using react</h2>
        <p>Yep! I made a modal by using react</p>
      </Modal>}
    </div>
  );
}

export default App;
