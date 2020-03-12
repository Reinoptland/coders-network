import { combineReducers } from "redux";
import posts from "./posts/reducer";
import postDetails from "./postDetails/reducer";
import developerDetails from "./developerDetails/reducer";
import developers from "./developers/reducer";

const reducer = combineReducers({
  posts: posts,
  postDetails: postDetails,
  developerDetails: developerDetails,
  developers: developers
});
export default reducer;
