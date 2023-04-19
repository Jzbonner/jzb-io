import CoverImage from './cover-image';

export default function PostTitle({ children, title, cover, slug }) {
  return (
    <div class="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 border-2 border-primary">
        <CoverImage title={title} url={cover} slug={slug} />
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="text-6xl text-footer md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {children}
        </h1>
      </div>
    </div>
  );
}
