import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendar = () => {
  const [selected, setSelected] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const task = e.target.task.value;
    const newTask = {
      date,
      task,
    };
    fetch("http://localhost:5000/task",{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(newTask)
    }).then(res=>res.json()).then(data=>{
        if(data.insertedId){
            e.target.reset()
        }
    })
  };
  return (
    <div class="hero min-h-[80vh]">
      <div class="hero-content flex-col lg:flex-row">
        <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        <div>
          <h1 class="text-3xl text-center font-bold">Add a new task</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="text-center w-full mt-4 text-2xl font-bold"
              type="text"
              name="date"
              value={format(selected, "PP")}
              readOnly
              disabled
            />
            <br />
            <textarea
              className="w-full rounded-lg m-2 p-2 border"
              name="task"
              placeholder="Add a new task"
            ></textarea>
            <div className="flex justify-center">
              <input type="submit" value="Add" className="btn " />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
