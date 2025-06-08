import { Provider } from "react-redux";
import { store } from "./app/store";
import PostList from "./feature/posts/PostList";

function App() {
  return (
    <Provider store={store}>
      <PostList />
    </Provider>
  );
}

export default App;
