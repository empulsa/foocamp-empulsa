import Link from 'next/link';

export default function MainCta({ fields, className }) {
  const icon = Object.prototype.hasOwnProperty.call(fields, 'icon') && fields.icon.fields.file.url;

  const rendericon = () => <img className="main-cta__icon" src={icon} width="20" height="18" alt="" />;

  return (
    <Link href={fields.linkUrl}>
      <a target={fields.externalLink ? '_blank' : ''} href={fields.linkUrl} className={`main-cta ${className}`} rel="noreferrer">
        {icon ? rendericon() : '' }
        <span className="main-cta__text">{fields.linkLabel}</span>
      </a>
    </Link>
  );
}
