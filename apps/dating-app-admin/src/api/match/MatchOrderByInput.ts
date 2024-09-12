import { SortOrder } from "../../util/SortOrder";

export type MatchOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  matchDate?: SortOrder;
  updatedAt?: SortOrder;
  user1?: SortOrder;
  user2?: SortOrder;
};
