import useFetchData from "./hooks/useFetchData";

const App = () => {
  // we can use callback function to reshape our data
  const users = useFetchData(
    "https://jsonplaceholder.typicode.com/users",
    (data) => data.map((item) => ({ name: item.name, id: item.id }))
  );
  const posts = useFetchData(
    "https://jsonplaceholder.typicode.com/posts",
    (data) =>
      data.slice(0, 10).map((item) => ({ title: item.title, id: item.id }))
  );
  const comments = useFetchData(
    "https://jsonplaceholder.typicode.com/comments",
    (data) =>
      data.slice(0, 10).map((item) => ({ name: item.name, id: item.id }))
  );

  console.log(users.data);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1>Users</h1>
        <hr />
        {users.loading && <h3>User Loading...</h3>}
        {users.error && <h3>{users.error}</h3>}
        {users.data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </div>
      <div>
        <h1>Posts</h1>
        <hr />
        {posts.loading && <h3>Post Loading...</h3>}
        {posts.error && <h3>{posts.error}</h3>}
        {posts.data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>
      <div>
        <h1>Comments</h1>
        <hr />
        {comments.loading && <h3>Post Loading...</h3>}
        {comments.error && <h3>{comments.error}</h3>}
        {comments.data?.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </div>
    </div>
  );
};

export default App;

/**
 * Steps to fetch data from online
 *  1. fetch and update state
 *  2. handle loading
 *  3. handle error
 */
