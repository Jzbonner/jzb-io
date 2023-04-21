import Link from 'next/link';
import Avatar from './avatar';
import DateComponent from '../../helperComponents/date';
import CoverImage from './cover-image';
import { Calendar } from 'react-feather';

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section class="relative mb-12 py-4">
      <div class="absolute inset-0 bg-gradient-to-r from-tertiary overflow-hidden rounded-lg">
        <CoverImage title={title} url={coverImage.url} slug={slug} />
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-1/2 md:w-1/2 h-80 flow-root bg-tertiary border-4 border-accent rounded-lg p-8 md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg">
          <h3 class="mb-4 text-4xl lg:text-6xl leading-tight border-b-2 border-footer font-hind font-semibold text-footer text-center">
            <Link href={`/posts/${slug}`}>{title}</Link>
          </h3>
          <div className="inline-flex items-center float-right py-2 mb-4 ml-2 font-semibold uppercase bg-cover border-2 rounded-full text-md font-hind bg-layered-waves border-footer md:mb-0 text-footer">
            <Calendar size={20} class="ml-2"/>
            <DateComponent dateString={date} />
          </div>
          <p class="text-lg text-footer font-medium font-hind tracking-tight mb-4 p-6">
            {excerpt}
          </p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  );
}
