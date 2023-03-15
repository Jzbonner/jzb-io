import Container from '../src/global/container';
import Intro from '../src/features/intro';
import IntroSection from '../src/features/home/intro-section';
import ServicesSection from '../src/features/home/services-section';
import SpotlightSection from '../src/features/home/spotlight-section';
import Layout from '../src/global/layout';
import { getAllPostsForBlog } from '../lib/api';
import Head from 'next/head';

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>jzb.io</title>
        </Head>
        <Container>
          {/* section: splash intro */}
          <Intro />
          <IntroSection />

          {/* section: services and experience */}
          <ServicesSection />

          {/* section: spotlight */}
          <SpotlightSection />
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
