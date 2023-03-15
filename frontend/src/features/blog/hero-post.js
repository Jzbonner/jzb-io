import Link from 'next/link';
import Avatar from './avatar';
import DateComponent from '../../helperComponents/date';
import CoverImage from './cover-image';

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-2 md:mb-8">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-0 md:mb-0">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight text-primary">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg text-primary">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div className="pb-4 md:pb-8 lg:pb-24 text-primary">
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  );
}
