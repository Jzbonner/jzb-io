import ContentfulImage from './contentful-image';

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4 ml-4">
        <ContentfulImage
          src={picture.url}
          layout="fill"
          className="border-2 border-primary rounded-full shadow-xl"
          alt={name}
        />
      </div>
      <div className="text-footer text-lg font-semibold">{name}</div>
    </div>
  );
}
