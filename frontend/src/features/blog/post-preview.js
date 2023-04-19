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
    <div>
      <div className="mb-5 border-2 border-primary shadow-xl">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 className="text-3xl text-footer font-medium mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="flex items-center ml-2 text-sm text-footer font-semibold uppercase mb-4">
        <Calendar size={20} />
        <DateComponent dateString={date} />
      </div>
      <p className="text-md text-tertiary font-medium leading-relaxed mb-4">
        {excerpt}
      </p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}
