import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowRight } from 'react-feather';

export default function PostBody({ content }) {
  return (
    <div class="max-w-3xl mx-auto pb-24 font-hind">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        className={'post-body'}
        components={{
          a: (props) => {
            return <a href={props.href}>link</a>;
          },
          ol: (props) => {
            return <ol>{props.children}</ol>;
          },
          li: (props) => {
            return (
              <li class="flow-root">
                ️<ArrowRight size={14} class="float-left mr-2 mt-1" />
                {props.children}
              </li>
            );
          },
        }}
      />
    </div>
  );
}
