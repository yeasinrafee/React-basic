import Style from './EventList.module.css';

const EventList = ({datas, handleClick}) => {
  return (
    <>
        {datas.map((data) => (
            <div className={Style.card} key={data.id}>
                <h2>{data.title}</h2>
                <p>{data.location}</p>
                <p>{data.date}</p>
                <button onClick={()=> handleClick(data.id)}>Delete</button>
            </div>
        ))}
    </>
  )
};

export default EventList;
