import { useState } from "react";

function App() {
  const [showDatas, setShowDatas] = useState(true);
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

  return (
    <div className="App">
      {showDatas && <div>
        <button onClick={() => setShowDatas(false)}>Hide Data</button>
      </div>}
      {!showDatas && <div>
        <button onClick={() => setShowDatas(true)}>Show Data</button>
      </div>}
      {showDatas && datas.map((data) => (
        <div key={data.id}>
          <h2>{data.title}</h2>
          <button onClick={() => handleClick(data.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
