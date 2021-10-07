import { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import EmpulsaCarousel from './EmpulsaCarousel';
import useViewport from '../hooks/useViewport';

export default function ContentWithLogosSection({ fields }) {
  const { viewport } = useViewport();
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [spaceBetween, setSpaceBetween] = useState(40);

  const getSectionTitle = Object.prototype.hasOwnProperty.call(fields, 'title')
    ? <h2 className="contentWithLogosSection__title">{fields.title}</h2>
    : false;

  const getSectionText = Object.prototype.hasOwnProperty.call(fields, 'text')
    ? <div className="contentWithLogosSection__text-wrapper">{documentToReactComponents(fields.text)}</div>
    : false;

  const getSectionBrand = Object.prototype.hasOwnProperty.call(fields, 'logoImages')
    ? (
      <div className="contentWithLogosSection__brands">
        <EmpulsaCarousel
          autoplay
          loop
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
        >
          {fields.logoImages.map(({ fields: { title, file }, sys }) => (
            <img
              key={sys.id}
              src={file.url}
              alt={title}
              title={title}
              className="contentWithLogosSection__brand"
            />
          ))}
        </EmpulsaCarousel>
      </div>
    )
    : false;

  useEffect(() => {
    if (viewport === 'lg') {
      setSlidesPerView(3);
      setSpaceBetween(80);
    } else if (viewport === 'xl') {
      setSlidesPerView(5);
      setSpaceBetween(120);
    } else {
      setSlidesPerView(2);
      setSpaceBetween(40);
    }
  }, [viewport]);

  return (
    <>
      {getSectionTitle}
      {getSectionText}
      {getSectionBrand}
    </>
  );
}
