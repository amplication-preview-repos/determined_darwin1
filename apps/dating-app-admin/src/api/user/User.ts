import { Profile } from "../profile/Profile";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  firstName: string | null;
  gender: string | null;
  id: string;
  lastName: string | null;
  location: string | null;
  profiles?: Array<Profile>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
