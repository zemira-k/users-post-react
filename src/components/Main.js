import React from "react";
import { getUsersInfo } from "./Api";
import { getPostsByUserId } from "./Api";
import { Table } from "./Table.js";
import { Posts } from "./Posts.js";

export const Main = () => {
  const [userInfo, setUserInfo] = React.useState([]);
  const [posts, setPosts] = React.useState([]);

  const handleClick = (id) => {
    getPostsByUserId(id)
      .then((postData) => {
        setPosts(postData);
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  React.useEffect(() => {
    getUsersInfo()
      .then((userData) => {
        setUserInfo(userData);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  return (
    <main>
      <div>
        <Table handleClick={handleClick} userInfo={userInfo} />
      </div>
      <p>click on a name to see the users' pots</p>
      <Posts posts={posts} />
    </main>
  );
};
