export default function ProcessSection({ fields }) {
  const { steps } = fields;
  const getSectionHeadlines = () => {
    const getSectionTitle = Object.prototype.hasOwnProperty.call(fields, 'title') ? <h2 className="processSection__title">{fields.title}</h2> : false;

    return (
      <>
        {getSectionTitle}
      </>
    );
  };

  const renderImageInfoItem = (item) => {
    const style = { '--background-color': item.fields.color };
    return (
      <li className="processSection__item" key={item.sys.id}>
        <div className="processSection__item__icon">
          <img className="processSection__item__image" src={item.fields.icon.fields.file.url} alt={item.fields.icon.fields.title} />
        </div>
        <span className="processSection__item__step" style={style}>{item.fields.stepId}</span>
        <h2
          className={`processSection__item__title ${item.fields.applyBackgroundColorToTitle ? 'processSection__item--colored' : ''}`}
          style={style}
        >
          {item.fields.title}
        </h2>
        <h6 className="processSection__item__text">{item.fields.text}</h6>
      </li>
    );
  };
  return (
    <>
      {getSectionHeadlines()}
      <ul className="processSection__items">
        {steps.map((item) => renderImageInfoItem(item))}
      </ul>
    </>
  );
}
