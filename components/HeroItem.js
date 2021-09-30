import Link from 'next/link';
import Image from 'next/image';

export default function HeroItem({ fields }) {
  const getSectionTitle = Object.prototype.hasOwnProperty.call(fields, 'title')
    ? <h1 className="heroItem__title">{fields.title}</h1>
    : false;

  const getSectionText = Object.prototype.hasOwnProperty.call(fields, 'text')
    ? <p className="heroItem__text">{fields.text}</p>
    : false;

  const getSectionLink = Object.prototype.hasOwnProperty.call(fields, 'link')
    ? (
      <Link href={fields.link.fields.linkUrl}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="heroItem__button">
          {fields.link.fields.linkLabel}
          <svg className="heroItem__button-icon" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39 8.09998H15C14.1 8.09998 13.4 8.79998 13.4 9.69998C13.4 10.6 14.1 11.3 15 11.3H35.1L7.90001 38.6C7.30001 39.2 7.30001 40.2 7.90001 40.9C8.20001 41.2 8.60001 41.4 9.00001 41.4C9.40001 41.4 9.80001 41.2 10.1 40.9L37.4 13.6V33.7C37.4 34.6 38.1 35.3 39 35.3C39.9 35.3 40.6 34.6 40.6 33.7V9.69998C40.6 8.89998 39.9 8.09998 39 8.09998Z" />
          </svg>
        </a>
      </Link>
    )
    : false;

  const getSectionImage = Object.prototype.hasOwnProperty.call(fields, 'image')
    ? (
      <div className="heroItem__image-wrapper">
        <Image
          src={`https:${fields.image.fields.file.url}`}
          alt={fields.image.fields.title}
          className="heroItem__image"
          layout="fill"
          objectFit={fields.useImageAsBackground ? 'cover' : 'contain'}
        />
      </div>
    )
    : false;

  const hasTextOnLeft = fields.textOnLeft
    ? ' heroItem__content--reverse'
    : '';
  const hasImageBackground = fields.useImageAsBackground
    ? ' heroItem__content--background'
    : '';
  const hasImageBackgroundReverse = (fields.textOnLeft && fields.useImageAsBackground)
    ? ' heroItem__content--background-reverse'
    : '';

  return (
    <div className="heroItem">
      <div className={`section-content heroItem__content${hasTextOnLeft}${hasImageBackground}${hasImageBackgroundReverse}`}>
        {getSectionImage}
        <div className="heroItem__content-text">
          {getSectionTitle}
          {getSectionText}
          {getSectionLink}
        </div>
      </div>
    </div>
  );
}
