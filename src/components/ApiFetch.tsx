import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiFetch = () => {
  // APIを叩くとき、TypeScriptでは予め受け取る型をInterfaceで実装しておく必要がある。
  interface Json {
    userId?: number;
    id?: number;
    title?: string;
    body?: string;
  }

  // リストで受け取りたいので以下の型指定
  // const [posts, setPosts] = useState<Json[]>([]);
  // 一方で単一ユーザーのデータの場合はObjectで受け取るようにする
  const [posts, setPosts] = useState<Json>({});
  const [id, setId] = useState<string | number>(1);
  const [clicked, setClicked] = useState<boolean>(false);

  const getUserData = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const clickedHandler = () => {
    setClicked(!clicked);
  };

  // // APIを叩く関数
  // const getJsonAxios = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     setPosts(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // fetchならこっち
  // const getJsonFetch = () => {
  //   fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //     });
  // };

  useEffect(() => {
    // ボタンクリックされるたびに発火
    getUserData();
  }, [clicked]);

  return (
    <>
      <div>
        <input type="text" value={id} onChange={changeIdHandler} />
        <br />
        <button onClick={clickedHandler}>Get Data</button>
        <br />
        {posts.id}
        <br />
        {posts.title}
        <ul>
          {/* {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)} */}
        </ul>
      </div>
    </>
  );
};

export default ApiFetch;
