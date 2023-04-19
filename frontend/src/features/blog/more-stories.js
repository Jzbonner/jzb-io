import PostPreview from './post-preview';

export default function MoreStories({ posts }) {
  return (
    <section class="border-t-2 border-backdrop py-8">
      <h2 className="mb-8 text-6xl font-semibold leading-tight tracking-tighter text-footer md:text-7xl">
        More Stories
      </h2>
      <div className="grid grid-cols-1 pb-12 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
