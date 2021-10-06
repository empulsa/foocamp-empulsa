import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function TextWithImageAndLinkOnSide({ fields }) {
  const { imageAndLinkItems } = fields;
  const getSectionHeadlines = () => {
    const getSectionTitle = Object.prototype.hasOwnProperty.call(fields, 'title') ? <h2 className="textWithImageAndLinkOnSide__title">{fields.title}</h2> : false;
    const getSectionText = Object.prototype.hasOwnProperty.call(fields, 'text') ? <div className="textWithImageAndLinkOnSide__text">{documentToReactComponents(fields.text)}</div> : false;

    return (
      <div className="textWithImageAndLinkOnSide__content">
        {getSectionTitle}
        {getSectionText}
      </div>
    );
  };

  const renderImageInfoItem = (item) => {
    const style = { '--background-color': item.fields.imgBackgroundColor };

    return (
      <li className="textWithImageAndLinkOnSide__item" key={item.sys.id} style={style}>
        <img className="textWithImageAndLinkOnSide__item__img" src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title} />
        <Link href={item.fields.link.fields.linkUrl}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="textWithImageAndLinkOnSide__item__btn" target={item.fields.link.fields.externalLink ? '_blank' : ''}>
            <p className="textWithImageAndLinkOnSide__item__text">{item.fields.link.fields.linkLabel}</p>
          </a>
        </Link>
      </li>
    );
  };

  return (
    <>
      {getSectionHeadlines()}
      <ul className="textWithImageAndLinkOnSide__items">
        {imageAndLinkItems.map((item) => renderImageInfoItem(item))}
      </ul>
    </>
  );
}
