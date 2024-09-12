import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MatchWhereInput = {
  id?: StringFilter;
  matchDate?: DateTimeNullableFilter;
  user1?: StringNullableFilter;
  user2?: StringNullableFilter;
};
