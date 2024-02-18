import Task from "../../components/task/Task";
import TaskForm from "../../components/taskForm/TaskForm";

function TaskPage() {
  const steps = ["Enter the title", "click on the button"];
  const loading = false;
  return (
    <div>
      <ul>
        {steps.map((step) => {
          return <li>{step}</li>;
        })}
      </ul>
      <TaskForm />
      {/* {loading ? (
        <div>is loading</div>
      ) : (
        <>
          <Task />
          <Task />
          <Task />
        </>
      )} */}
      {loading && <div>is loading...</div>}
      {!loading && (
        <>
          <Task
            title="learn html"
            duration={80}
            details={{ difficulty: 8, level: "level 1" }}
          />
          <Task
            title="learn React"
            duration={60}
            details={{ difficulty: 10, level: "level 2" }}
          />
          <Task
            title="learn JS"
            duration={70}
            // details={{ difficulty: 12, level: "level 3" }}
          />
        </>
      )}
    </div>
  );
}

export default TaskPage;
