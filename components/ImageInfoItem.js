export default function InfoItems({ fields }) {
  const { infoItems } = fields;
  const getTitle = () => {
    if (Object.prototype.hasOwnProperty.call(fields, 'title') === true) {
      return <h2 className="image-info-item-title">{fields.title}</h2>;
    }
    if (Object.prototype.hasOwnProperty.call(fields, 'shortText') === true) {
      return <p className="image-info-item-shortText">{fields.shortText}</p>;
    }
    return false;
  };
  return (
    <div className="image-info-item-container">
      {getTitle()}
      {infoItems.map((card) => {
        const style = { '--background-color': card.fields.imgBackgroundColor };
        return (
          <div className="image-info-item" key={card.sys.id} style={style}>
            <div className="image-info-item__icon-wrapper">
              <img className="image-info-item__icon" src={card.fields.image.fields.file.url} alt="" />
            </div>
            <div className="image-info-item__info-wrapper">
              <h3 className={`image-info-item__title${card.fields.applyBackgroundColorToTitle}` ? 'image-info-item__title image-info-item__title--colored' : ''}>{card.fields.title}</h3>
              <p className="image-info-item__info">{card.fields.shortText}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
