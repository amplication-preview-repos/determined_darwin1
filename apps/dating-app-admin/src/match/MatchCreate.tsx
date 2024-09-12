import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const MatchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="matchDate" source="matchDate" />
        <TextInput label="User1" source="user1" />
        <TextInput label="User2" source="user2" />
      </SimpleForm>
    </Create>
  );
};
