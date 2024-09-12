import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  bio?: string | null;
  interests?: string | null;
  photos?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
