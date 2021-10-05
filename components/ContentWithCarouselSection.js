import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function ContentWithCarouselSection({ fields }) {
  const { carouselImages } = fields;

  const getSectionHeadlines = () => {
    const getSectionTitle = Object.prototype.hasOwnProperty.call(fields, 'title') ? <h2 className="contentWithCarouselSection__title">{fields.title}</h2> : false;
    const getSectionText = Object.prototype.hasOwnProperty.call(fields, 'text') ? <div className="contentWithCarouselSection__text-wrapper">{documentToReactComponents(fields.text)}</div> : false;

    return (
      <>
        {getSectionTitle}
        {getSectionText}
      </>
    );
  };

  return (
    <>
      <div className="contentWithCarouselSection__info-container">
        {getSectionHeadlines()}
        <button className="contentWithCarouselSection__button" type="button">Saber más</button>
      </div>
      <div className="contentWithCarouselSection__carousel-container">
        {carouselImages.map((image) => (
          <div className="contentWithCarouselSection__img-wrapper" key={image.sys.id}>
            <img className="contentWithCarouselSection__img" src={image.fields.file.url} alt="carousel" />
          </div>
        ))}
      </div>
    </>
  );
}
