export const Posts = ({ posts }) => {
  return (
    <section className="posts">
      <header>
        <h2 class="posts-header">my posts</h2>
      </header>
      <div className="posts-container">
        {posts.map((post, index) => {
          return (
            <section key={index} className="post-container">
              <header>
                <h3 className="post-title">{post.title}</h3>
              </header>
              <p className="post-text">{post.body}</p>
            </section>
          );
        })}
      </div>
    </section>
  );
};
