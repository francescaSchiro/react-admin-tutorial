import React from "react";
// import { Admin, Resource, ListGuesser } from "react-admin";
import { Admin, Resource, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
// import dataProvider from "./dataProvider";

import authProvider from "./authProvider";
import { UserList } from "./components/users";
import { PostList, PostEdit, PostCreate } from "./components/posts";
import Dashboard from "./components/dashboard";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" 
    list={UserList} 
    edit={EditGuesser} 
    icon={UserIcon}
    />
  </Admin>
);

export default App;

