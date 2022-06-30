import { useEffect, useState } from "react";
import "react-day-picker/dist/style.css";
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const navigate=useNavigate()
    const { id } = useParams()
    const [updateTask,setUpdateTask]=useState({})
    const { date, task } = updateTask;
    console.log(task);
    useEffect(()=>{
        fetch(`http://localhost:5000/task/${id}`)
          .then((res) => res.json())
          .then((data) => setUpdateTask(data));
    },[id])
    
    
    const handleUpdate = (e) => {
      e.preventDefault();
      const task = e.target.task.value;
      
      fetch(`http://localhost:5000/task/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({task}),
      })
        .then((res) => res.json())
        .then((data) =>{
            if(data.modifiedCount){
                navigate('/')
            }
        });
    };
    return (
      <div className="w-1/2 mx-auto">
        <h1 class="text-3xl text-center font-bold">update task</h1>
        <form onSubmit={handleUpdate}>
          <input
            className="text-center w-full mt-4 text-2xl font-bold"
            type="text"
            name="date"
            value={date}
            readOnly
            disabled
          />
          <br />
          <textarea
            className="w-full rounded-lg m-2 p-2 border"
            name="task"
            defaultValue={task}
            placeholder="Add a new task"
          ></textarea>
          <div className="flex justify-center">
            <input type="submit" value="Update" className="btn " />
          </div>
        </form>
      </div>
    );
};

export default Update;