import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Profile = {
  bio: string | null;
  createdAt: Date;
  id: string;
  interests: string | null;
  photos: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
