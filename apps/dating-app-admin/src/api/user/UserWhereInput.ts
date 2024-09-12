import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";

export type UserWhereInput = {
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  gender?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  location?: StringNullableFilter;
  profiles?: ProfileListRelationFilter;
  username?: StringFilter;
};
