import ContentfulImage from './contentful-image';

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 ml-4 mr-4">
        <ContentfulImage
          src={picture.url}
          layout="fill"
          className="border-2 rounded-full shadow-xl border-primary"
          alt={name}
        />
      </div>
      <div className="text-lg font-medium text-footer font-hind">{name}</div>
    </div>
  );
}
