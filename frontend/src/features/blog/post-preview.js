import Link from 'next/link';
import Avatar from './avatar';
import DateComponent from '../../helperComponents/date';
import CoverImage from './cover-image';
import { Calendar } from 'react-feather';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div class="flow-root">
      <div className="mb-5 overflow-hidden border-2 shadow-xl rounded-xl h-96 border-primary">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 className="mb-3 text-3xl font-semibold leading-snug font-hind text-footer">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="flex items-center mb-4 -mt-3 text-sm font-semibold uppercase font-hind text-tertiary">
        <Calendar size={20} class="-mt-1" />
        <DateComponent dateString={date} />
      </div>
      <p className="mb-4 text-lg font-medium leading-relaxed font-hind text-tertiary">
        {excerpt}
      </p>
      <div class="float-right mt-4">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
    </div>
  );
}
