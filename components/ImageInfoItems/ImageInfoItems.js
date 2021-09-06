export default function InfoItems({ fields }) {
  const { infoItems } = fields;

  return (
    <section className="image-info-items">
      <h2 className="image-info-items__title">{fields.title}</h2>
      {infoItems.map((card) => {
        const style = { '--background-color': card.fields.imgBackgroundColor };
        return (
          <div className="image-info-item" key={card.sys.id} style={style}>
            <div className="image-info-item__icon-wrapper">
              <img className="image-info-item__icon" src={card.fields.image.fields.file.url} alt="" />
            </div>
            <h3 className={`image-info-item__title${card.fields.applyBackgroundColorToTitle}` ? ' image-info-item__title--colored' : ''}>{card.fields.title}</h3>
            <p className="image-info-item__info">{card.fields.shortText}</p>
          </div>
        );
      })}
    </section>
  );
}
