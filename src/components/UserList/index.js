import React from "react";
import { List, Datagrid, TextField } from "react-admin";

const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
);

export default UserList;
