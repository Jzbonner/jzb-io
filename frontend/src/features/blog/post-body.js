import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

export default function PostBody({ content }) {
  return (
    <div class="max-w-3xl mx-auto pb-24">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        className={'post-body'}
        components={{
          a: (props) => {
            return <a href={props.href}>link</a>;
          },
        }}
      />
    </div>
  );
}
