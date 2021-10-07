import HeroItem from './HeroItem';
import EmpulsaCarousel from './EmpulsaCarousel';

export default function HeroSection({ fields }) {
  const { heroItems } = fields;
  const handleCarousel = heroItems.length > 1;
  return (
    <>
      {handleCarousel ? (
        <EmpulsaCarousel pagination loop slidesPerView={1} spaceBetween={20}>
          {heroItems.map((heroItem) => (
            <HeroItem key={heroItem.sys.id} fields={heroItem.fields} />
          ))}
        </EmpulsaCarousel>
      ) : (
        heroItems.map((heroItem) => (
          <HeroItem key={heroItem.sys.id} fields={heroItem.fields} />
        ))
      )}
    </>
  );
}
