import HeroItem from './HeroItem';

export default function HeroSection({ fields }) {
  const { heroItems } = fields;
  return (
    <>
      {heroItems.map((heroItem) => (
        <HeroItem fields={heroItem.fields} key={heroItem.sys.id} />
      ))}
    </>
  );
}
