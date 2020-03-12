import { combineReducers } from "redux";
import posts from "./posts/reducer";
import postDetails from "./postDetails/reducer";
import developers from "./developers/reducer";

const reducer = combineReducers({
  posts: posts,
  postsDetails: postDetails,
  developers: developers
});
export default reducer;
