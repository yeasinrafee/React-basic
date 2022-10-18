import { useState } from 'react';
import './NewEventForm.css';

export default function NewEventForm({addNewData}) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState("Uttara")

    const handleReset = () =>{
        setTitle('');
        setDate('');
        setLocation('Uttara');
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const datas = {
            title : title,
            date : date,
            location: location,
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
                onChange={(e) => setTitle(e.target.value)}
                value= {title}
                />
        </label>
        <label>
            <span>Event Date:</span>
            <input 
                type="date" 
                onChange={(e) => setDate(e.target.value)}
                value = {date}
                />
        </label>
        <label >
            <span>Chose your location:  </span>
            <select onChange={(e) => setLocation(e.target.value)}>
                <option value={location}>Uttara</option>
                <option value={location}>Banani</option>
                <option value={location}>Gulshan</option>
            </select>
        </label>
        <button style={{marginRight: "20px"}}>Submit</button>
        <button onClick={handleReset}>Reset</button>
    </form>
  )
}
