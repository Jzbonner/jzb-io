//TODO: combine author and date component with one div for better styling

import Avatar from './avatar';
import DateComponent from '../../helperComponents/date';
import PostTitle from './post-title';

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      {/* changed the cover param to test different versions of this setup */}
      <PostTitle title={title} cover={coverImage.url} slug={coverImage.slug}>
        {title}
      </PostTitle>
      <div className="md:block md:mb-12">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="p-2 mb-6 -mt-16 ml-16 text-xs text-tertiary font-semibold uppercase">
        <DateComponent dateString={date} />
      </div>
    </>
  );
}
