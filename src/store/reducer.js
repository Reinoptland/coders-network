import { combineReducers } from "redux";
import posts from "./posts/reducer";
import postDetails from "./postDetails/reducer";
import developerDetails from "./developerDetails/reducer";
import developers from "./developers/reducer";
import user from "./user/reducer";

const reducer = combineReducers({
  posts: posts,
  postDetails: postDetails,
  developerDetails: developerDetails,
  developers: developers,
  user: user
});
export default reducer;
