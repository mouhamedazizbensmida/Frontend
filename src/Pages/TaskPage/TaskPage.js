import { useEffect, useState } from "react";
import TaskForm from "../../components/taskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";
import * as api from "../../services/tasks3.service";
function TaskPage() {
  const steps = ["step1", "step2"];
  //const taskList = ["task1", "task1", "task3"];
  const [tasks, setTasks] = useState([
    // {
    //   _id: "1",
    //   title: "learn html",
    //   duration: "60",
    // },
    // {
    //   _id: "2",
    //   title: "learn JS",
    //   duration: "80",
    // },
    // {
    //   _id: "3",
    //   title: "learn React",
    //   duration: "60",
    // },
  ]);
  // 2 eme forme
  useEffect(() => {
    async function fetchData() {
      try {
        seterror(false);
        setLoading(true);
        const tasks = await api.fetchTasks();
        setTasks(tasks);
        setLoading(false);
      } catch (e) {
        seterror(true);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  /*function SayHello(value) {
    alert("hello" + value);
  }*/
  // const [searchValue, setSearchValue] = useState("");

  // 3ème forme de useEffect
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     // setLoading(false);
  //     // const result = await api.fetchTasks();
  //     // setTasks(result);
  //     // if (searchValue.length === 0) {
  //     //   console.log("tasks empty");
  //     //   setTasks([]);
  //     //   setLoading(false);
  //     // } else {
  //     const result = await api.fetchTasksByFilter(searchValue);
  //     console.log("tasks form api : " + searchValue);
  //     setTasks(result);
  //     setLoading(false);
  //     // }
  //   };
  //   console.log("searchValue", searchValue);
  //   fetchData();
  // }, [searchValue]);

  // 4ème forme de useEffect
  // useEffect(() => {
  //   let didCancel = false
  //   const fetchData = async () => {
  //     setLoading(true)
  //     if (!searchValue) {
  //       setTasks([])
  //       setLoading(false)
  //     } else {
  //       const result = await api.fetchTasksByFilter(searchValue)
  //       if (!didCancel) {
  //         console.log("result: ", searchValue)

  //         setTasks(result)
  //         setLoading(false)
  //       }
  //     }
  //   }
  //   // console.log("useEffect:", searchValue)
  //   fetchData()

  //   return () => {
  //     console.log("cleanup: ", searchValue)
  //     didCancel = true
  //   }
  // }, [searchValue])
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(false);
  function handleVisibility(p) {
    setIsVisible(!isVisible);
  }
  async function addTask(title, duration) {
    const newTask = await api.addTask({ title, duration });
    // console.log("title", "duration:", title, duration);
    // const newTask = {
    //   _id: tasks.length + 1 + "",
    //   title: title,
    //   duration: duration,
    // };

    //const newTask={_id:tasks.length +"",title ,duration}
    //setTasks(tasks.concat(newTask)) c comme setTasks
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    console.log("delete", id);
    setTasks(
      tasks.filter((t) => {
        return t._id !== id;
      })
    );
  }

  function updateTask(task) {
    console.log(task);
    setTasks(
      tasks.map((t) => {
        if (t._id === task._id) {
          t.title = task.title;
          t.duration = task.duration;
        }
        return t;
      })
    );

    // setTasks([
    //   ...tasks.slice(0, task._id - 1),
    //   task,
    //   ...tasks.slice(task._id - 1 + 1),
    // ]);
  }
  return (
    <div className="App">
      <ul>
        {steps.map((step, index) => {
          return <li key={index}>{step}</li>;
        })}
      </ul>
      {/*<button onclick="setIsVisible=(!isVisible)">toggle visibility</button> en javascript*/}
      {/*<button onClick={handleVisibility}>toggle visibility</button>*/}
      <button onClick={() => handleVisibility("hello")}>
        toggle visibility
      </button>

      <TaskForm addTask={addTask} /*SayHello={SayHello}*/ />
      {/*{loading ? (
        <div>loading...</div>
      ) : (
        <>
          <Task />
          <Task />
          <Task />
        </>
      )}*/}
      {/* {
        <input
          type="text"
          name="title"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      } */}
      {error && <div>Error</div>}
      {loading && <div>loading..</div>}
      {!loading && isVisible && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
        /*<>
          <Task title="task1" duration={60} />
          <Task
            title="task2"
            duration={60}
            details={{ difficulty: 10, level: "level2" }}
          />
          <Task
            title="task3"
            duration={60}
            details={{ difficulty: 10, level: "level" }}
          />
        </>*/
      )}
    </div>
  );
}

export default TaskPage;
