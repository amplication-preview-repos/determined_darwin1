import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  bio?: string | null;
  interests?: string | null;
  photos?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
