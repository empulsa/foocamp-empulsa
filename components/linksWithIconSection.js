import Link from 'next/link';

export default function linksWithIconSection({ fields }) {
  const {
    title,
    text,
    textColor,
    links,
  } = fields;
  // const { title, text, links, textColor} = fields;

  const colorText = { color: textColor };
  const renderLinks = (link) => {
    const { linkUrl, linkLabel, linkIcon } = link.fields;
    return (
      <li className="boost__item" key={link.sys.id}>
        <Link href={linkUrl}>
          <a href={linkUrl} className="boost__item__link">
            <div className="boost__item__img">
              <img
                src={linkIcon.fields.file.url}
                alt={linkIcon.fields.title}
                width={linkIcon.fields.file.details.image.width}
                height={linkIcon.fields.file.details.image.height}
              />
            </div>
            <p className="boost__item__text" style={colorText}>
              {linkLabel}
            </p>
          </a>
        </Link>
      </li>
    );
  };

  return (
    <section className="boost">
      <h3 className="boost__title" style={colorText}>
        {title}
      </h3>
      <p className="boost__text" style={colorText}>
        {text.content[0].content[0].value}
      </p>
      <ul className="boost__list">{links.map((link) => renderLinks(link))}</ul>
    </section>
  );
}
