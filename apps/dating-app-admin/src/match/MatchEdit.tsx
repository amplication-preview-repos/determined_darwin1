import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const MatchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="matchDate" source="matchDate" />
        <TextInput label="User1" source="user1" />
        <TextInput label="User2" source="user2" />
      </SimpleForm>
    </Edit>
  );
};
