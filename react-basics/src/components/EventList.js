import React from "react";

const EventList = ({datas, handleClick}) => {
  return (
    <>
        {datas.map((data) => (
            <React.Fragment key={data.id}>
                <h2>{data.title}</h2>
                <button onClick={()=> handleClick(data.id)}>Delete</button>
            </React.Fragment>
        ))}
    </>
  )
};

export default EventList;
