import React, { useState, useEffect } from "react";
import axios from "axios";

const DrfApiFetch = () => {
  interface Task {
    // any型を嫌うならこっちにすべき？
    // id: number | string;
    id: number;
    title: string;
  }

  // APIからの返り値はまず、一括取得等のObjectのリストになる場合はinterfaceで定義してinterface[]で定義
  const [tasks, setTasks] = useState<Task[]>([]);
  // 次に単一データの場合は初期値が空のObjectであった場合は当然型チェックでエラーが出るのでanyにしておく、理由は下記。
  const [selectedtask, setSelectedTask] = useState<any>({});
  // React.ChangeEvent<HTMLInputElement>型の要素が入るが、初期値を定義したいのでanyにしておく
  // これはinputタグから受け取る値がstring型になり、かつidプロパティの初期値は空にしたいのだが、そうするとその初期値自体もstring型になってしまうため
  const [editedTask, setEditedTask] = useState<any>({
    id: "",
    title: "",
  });
  //   inputタグをEventHandlerしたいならこれで定義(inputタグからの値はstring扱いされる)
  const [id, setId] = useState<string | number>(1);

  const getTaskList = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/tasks/", {
        headers: {
          Authorization: "Token f7b9c539921aa38efa6d2031658f0a916a2a5864",
        },
      });
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ChangeIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const ChangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const getTask = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/tasks/${id}`, {
        headers: {
          Authorization: "Token f7b9c539921aa38efa6d2031658f0a916a2a5864",
        },
      });
      setSelectedTask(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const newTask = async (task: Task) => {
    const data = {
      title: task.title,
    };

    try {
      const res = await axios.post(`http://127.0.0.1:8000/api/tasks/`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token f7b9c539921aa38efa6d2031658f0a916a2a5864",
        },
      });
      setTasks([...tasks, res.data]);
      setEditedTask({
        id: "",
        title: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = async (task: Task) => {
    try {
      const res = await axios.put(
        `http://127.0.0.1:8000/api/tasks/${task.id}/`,
        task,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token f7b9c539921aa38efa6d2031658f0a916a2a5864",
          },
        }
      );
      setTasks(
        tasks.map((task) => (task.id === editedTask.id ? res.data : task))
      );
      setEditedTask({
        id: "",
        title: "",
      });
    } catch (error: any) {
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  };

  //   引数はイベントやレンダリング中に決まるので型はanyにしておく、正解かどうかは審議
  const deleteTask = async (id: number) => {
    try {
      const res = await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}`, {
        headers: {
          Authorization: "Token f7b9c539921aa38efa6d2031658f0a916a2a5864",
        },
      });
      setTasks(tasks.filter((task) => task.id !== id));
      setSelectedTask({});
      if (editedTask.id !== id) {
        setEditedTask({ id: "", title: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.id}
            {/* 定義した関数の返り値の型を指定していない場合(=void)、onClick属性でそのまま指定すると関数扱いにならないのでアローで呼び出し直す */}
            <button onClick={() => deleteTask(task.id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
            <button onClick={() => setEditedTask(task)}>
              <i className="fas fa-pen"></i>
            </button>
          </li>
        ))}
      </ul>
      <p>Set Id</p>
      <input type="text" value={id} onChange={ChangeIdHandler} />
      <br />
      <button type="button" onClick={() => getTask()}>
        Get Task
      </button>
      <br />
      <br />
      <input
        type="text"
        name="title"
        value={editedTask.title}
        onChange={ChangeTitleHandler}
        placeholder="New Title"
      />
      {editedTask.id ? (
        <button type="button" onClick={() => editTask(editedTask)}>
          Edit Task
        </button>
      ) : (
        <button type="button" onClick={() => newTask(editedTask)}>
          Create Task
        </button>
      )}
      <br />
      <h3>
        {selectedtask.title} {selectedtask.id}
      </h3>
    </div>
  );
};

export default DrfApiFetch;
