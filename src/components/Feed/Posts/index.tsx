import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      userName: "Tarek elkanaria",
      userImg:
        "https://i1.sndcdn.com/avatars-EgQrcnU0I9hGOzXB-Xw1bHA-t500x500.jpg",
      postImg:
        "https://images.unsplash.com/photo-1691573155562-bb83d1237f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      caption: "beauty of the sea",
    },
    {
      id: "2",
      userName: "elkanaria",
      userImg:
        "https://i1.sndcdn.com/avatars-EgQrcnU0I9hGOzXB-Xw1bHA-t500x500.jpg",
      postImg:
        "https://images.unsplash.com/photo-1691036561870-e2badbd0fd22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      caption: "calm in home",
    },
  ];
  return (
    <section className="mx-2 lg:mx-0 lg:col-span-2">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </section>
  );
}
