import Container from '../src/global/container';
import MoreStories from '../src/features/blog/more-stories';
import HeroPost from '../src/features/blog/hero-post';
import Intro from '../src/features/intro';
import Header from '../src/global/header';
import Layout from '../src/global/layout';
import { getAllPostsForBlog } from '../lib/api';
import Head from 'next/head';

export default function Blog({ preview, allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>jzb.io</title>
        </Head>
        <Container>
          <Header />
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              // date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForBlog(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}
