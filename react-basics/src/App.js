import { useState } from "react";
import Title from './components/Title';

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
        <div key={data.id}>
          <h2>{data.title}</h2>
          <button onClick={() => handleClick(data.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
