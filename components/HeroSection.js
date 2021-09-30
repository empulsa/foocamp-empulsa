import HeroItem from './HeroItem';

export default function HeroSection({ fields }) {
  const { heroItems } = fields;
  const heroValue = heroItems[0].fields;
  const heroValue2 = heroItems[1].fields;
  heroValue2.textOnLeft = false;
  return (
    <>
      <HeroItem fields={heroValue} />
      <HeroItem fields={heroValue2} />
    </>
  );
}
