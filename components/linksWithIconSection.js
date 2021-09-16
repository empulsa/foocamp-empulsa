import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function linksWithIconSection({ fields }) {
  const {
    title,
    text,
    textColor,
    links,
  } = fields;
  const getSectionHeadlines = (colorText) => {
    const getSectionTitle = Object.prototype.hasOwnProperty.call(fields, 'title') ? <h2 className="linksWithIconSection__title" style={colorText}>{title}</h2> : false;
    const getSectionText = Object.prototype.hasOwnProperty.call(fields, 'text') ? <p className="linksWithIconSection__text" style={colorText}>{documentToReactComponents(text)}</p> : false;

    return (
      <>
        {getSectionTitle}
        {getSectionText}
      </>
    );
  };

  const colorText = { color: textColor };
  const renderLinks = (link) => {
    const { linkUrl, linkLabel, linkIcon } = link.fields;
    return (
      <li className="linksWithIconSection__item" key={link.sys.id}>
        <Link href={linkUrl}>
          <a href={linkUrl} className="linksWithIconSection__item__link">
            <div className="linksWithIconSection__item__img">
              <img
                src={linkIcon.fields.file.url}
                alt={linkIcon.fields.title}
                width={linkIcon.fields.file.details.image.width}
                height={linkIcon.fields.file.details.image.height}
              />
            </div>
            <p className="linksWithIconSection__item__text" style={colorText}>
              {linkLabel}
            </p>
          </a>
        </Link>
      </li>
    );
  };

  return (
    <>
      {getSectionHeadlines(colorText)}
      <div className="linksWithIconSection__content">
        <ul className="linksWithIconSection__list">{links.map((link) => renderLinks(link))}</ul>
      </div>
    </>
  );
}
