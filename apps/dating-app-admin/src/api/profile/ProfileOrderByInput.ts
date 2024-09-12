import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  interests?: SortOrder;
  photos?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
