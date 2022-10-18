import { useRef, useState } from 'react';
import './NewEventForm.css';

export default function NewEventForm({addNewData}) {
    // const [title, setTitle] = useState('');
    // const [date, setDate] = useState('');

    const title = useRef();
    const date = useRef();

    const handleReset = () =>{
        // setTitle('');
        // setDate('');
        title.current.value = "";
        date.current.value = "";
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const datas = {
            title : title.current.value,
            date : date.current.value,
            id : Math.floor(Math.random() * 1000)
        }
        handleReset();
        addNewData(datas);
    }

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
        <label>
            <span>Event Title:</span>
            <input 
                type="text" 
                ref={title}
                />
        </label>
        <label>
            <span>Event Date:</span>
            <input 
                type="date" 
                ref={date}
                />
        </label>
        <button style={{marginRight: "20px"}}>Submit</button>
        <button onClick={handleReset}>Reset</button>
    </form>
  )
}
