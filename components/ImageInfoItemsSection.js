import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import EmpulsaCarousel from './EmpulsaCarousel';

export default function ImageInfoItemsSection({ fields }) {
  const { infoItems } = fields;
  const getSectionHeadlines = () => {
    const getSectionTitle = Object.prototype.hasOwnProperty.call(
      fields,
      'title',
    ) ? (
      <h2 className="imageInfoItemsSection__title">{fields.title}</h2>
      ) : (
        false
      );
    const getSectionText = Object.prototype.hasOwnProperty.call(
      fields,
      'text',
    ) ? (
      <div className="imageInfoItemsSection__text-wrapper">
        {documentToReactComponents(fields.text)}
      </div>
      ) : (
        false
      );

    return (
      <>
        {getSectionTitle}
        {getSectionText}
      </>
    );
  };

  const renderImageInfoItem = (item) => {
    const style = { '--background-color': item.fields.imgBackgroundColor };

    return (
      <div className="image-info-item" key={item.sys.id} style={style}>
        <div className="image-info-item__icon-wrapper">
          <img
            className="image-info-item__icon"
            src={item.fields.image.fields.file.url}
            alt=""
          />
        </div>
        <div className="image-info-item__info-wrapper">
          <h3
            className={`image-info-item__title ${
              item.fields.applyBackgroundColorToTitle
                ? 'image-info-item__title--colored'
                : ''
            }`}
          >
            {item.fields.title}
          </h3>
          <p className="image-info-item__info">{item.fields.shortText}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {getSectionHeadlines()}
      <div className="imageInfoItemsSection__items-container">
        {infoItems.map((item) => renderImageInfoItem(item))}
      </div>
      <EmpulsaCarousel
        navigation
        pagination
        slidesPerView={2}
        slideNextClass="slideNextClass"
        slidePrevClass="slidePrevClass"
      />
    </>
  );
}
