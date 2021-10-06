export default function ProcessSection({ fields }) {
  const { steps } = fields;
  console.log(steps);
  const getSectionHeadlines = () => {
    const getSectionTitle = Object.prototype.hasOwnProperty.call(fields, 'title') ? <h2 className="processSection__title">{fields.title}</h2> : false;

    return (
      <>
        {getSectionTitle}
      </>
    );
  };

  const prueba = {
    1: '<svg width="140" height="150" viewBox="0 0 140 150" xmlns="http://www.w3.org/2000/svg"><path d="M28.0199 23.4458C28.0199 23.4458 74.0568 -14.8895 114.222 6.47819C154.386 27.8459 137.976 58.1984 128.204 84.5266C118.922 109.538 85.797 160.333 53.0652 148.14C20.3335 135.946 0.564152 95.1341 0.0604061 73.4522C-0.373492 54.7916 13.9369 35.2878 28.0199 23.4458Z"/></svg>',
    2: '<svg width="92" height="100" viewBox="0 0 92 100" xmlns="http://www.w3.org/2000/svg"><path d="M1.89553 61.3553C1.89553 61.3553 -5.28513 21.8219 20.6591 5.90268C46.6032 -10.0165 58.9686 9.72977 71.1823 24.2843C82.7853 38.111 101.591 74.4208 83.5156 89.1625C65.4401 103.904 34.8686 101.475 21.9601 94.4197C10.8503 88.3474 4.15976 73.4878 1.89553 61.3553Z"/></svg>',
    3: '<svg width="126" height="150" viewBox="0 0 126 150" xmlns="http://www.w3.org/2000/svg"><path d="M5.90753 55.7653C5.90753 55.7653 26.2683 1.2298 71.9258 0.0312131C117.583 -1.16737 118.817 32.393 123.753 59.3611C128.442 84.9808 125.604 143.861 91.0526 149.255C56.5009 154.648 18.6114 129.604 7.14151 111.499C-2.73037 95.9179 -0.262403 72.5455 5.90753 55.7653Z"/></svg>',
    4: '<svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.6123 95.674C44.6123 95.674 0.983837 79.3854 0.0249705 42.8594C-0.933896 6.3334 25.9144 5.34621 47.4889 1.39746C67.9846 -2.35386 115.089 -0.0833206 119.404 27.558C123.719 55.1992 103.683 85.5109 89.1996 94.6868C76.7343 102.584 58.0364 100.61 44.6123 95.674Z"/></svg>',
  };
  let count = 0;
  function colorSvg(params) {
    return prueba[params];
  }
  const renderImageInfoItem = (item) => {
    const style = { '--background-color': item.fields.color };
    const styleSvg = { '--fill': item.fields.color };
    if (count === 4) {
      count = 0;
    }
    count += 1;
    return (
      <li className="processSection__item" key={item.sys.id}>
        <div className="processSection__item__icon">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <div dangerouslySetInnerHTML={{ __html: colorSvg(count) }} style={styleSvg} />
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
        {steps.map((item) => renderImageInfoItem(item, count))}
      </ul>
    </>
  );
}
