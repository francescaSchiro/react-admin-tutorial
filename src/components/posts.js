import React from "react";
import {
  List,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  DisabledInput,
  LongTextInput,
  Create,
  Filter,
  SimpleList,
  Responsive,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton
} from "react-admin";

export const PostList = props => (
  <List {...props} filters={<PostFilter />}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.title}
          secondaryText={record => `${record.views} views`}
          tertiaryText={record =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" />
          {/* Just like the <List> component, all <Reference> components(fetches data and passes it as record to children ) are only responsible for fetching and preparing data, and delegate rendering to their children. */}
          <ReferenceField source="userId" reference="users">
            {/* <TextField source="id" /> */}
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          {/* <TextField source= "body" /> // long elements shouldnt be in a Datagrid*/}
          <EditButton />
        </Datagrid>
      }
    />
  </List>
);

// imported in the PostList component at the "filters" prop of <List> component
export const PostFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);



// imported in Resource "edit" prop in the <Admin> component in App.js file
export const PostEdit = props => (
  //   <Edit {...props}>
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Edit>
);
// imported in the above component <PostEdit>
const PostTitle = ({ record }) => {
  return <span> Post {record ? `"${record.title}"` : ""} </span>;
};


// imported in Resource "create" prop in the <Admin> component in App.js file
export const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Create>
);
