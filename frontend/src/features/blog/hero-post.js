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
      <div class="absolute inset-0 bg-gradient-to-r from-secondary overflow-hidden shadow-xl rounded-lg">
        <CoverImage title={title} url={coverImage.url} slug={slug} />
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-1/2 md:w-1/2 bg-tertiary rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg">
          <h3 class="mb-4 text-4xl lg:text-6xl leading-tight border-b-2 border-footer font-medium text-footer">
            <Link href={`/posts/${slug}`}>
              {title}
            </Link>
          </h3>
          <div className="flex items-center pb-4 mb-4 ml-2 text-sm font-semibold uppercase md:mb-0 text-footer">
            <Calendar size={20} />
            <DateComponent dateString={date} />
          </div>
          <p class="text-lg text-footer font-light italic tracking-tight mb-4">
            {excerpt}
          </p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  );
}
