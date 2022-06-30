import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Calendar from "./Calendar";

const Home = () => {
    const navigate=useNavigate()
  const [allTask, setAllTask] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/task")
      .then((res) => res.json())
      .then((data) => setAllTask(data));
  }, [allTask]);

  const handleUpdate=(id)=>{
    navigate(`update/${id}`)
  }
  const handleCompleted=(id)=>{
console.log(id);
fetch(`http://localhost:5000/completed/${id}`, {
  method: "put",
  headers: {
    "content-type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    if(data.modifiedCount){
        alert("the task is completed")
    }
  });
  }
  return (
    <div className="mb-10">
        <Calendar/>
      <h1 className="text-center text-2xl font-bold">All Task</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
                Completed
              </th>
              <th>Date</th>
              <th>Task</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {allTask.map((tasks) => {
              const { _id, date, task } = tasks;
              return (
                <tr key={_id}>
                  <th>
                    <input onClick={()=>handleCompleted(_id)} type="checkbox" name="" id="" />
                  </th>
                  <td>{date}</td>
                  <td>{task}</td>
                  <td
                    onClick={() => handleUpdate(_id)}
                    className="text-blue-500 text-2xl cursor-pointer"
                  >
                    <AiOutlineEdit />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
