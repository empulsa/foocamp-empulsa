import Link from 'next/link';

export default function MainCta({ fields, className }) {
  return (
    <Link href={fields.linkUrl}>
      <a target={fields.externalLink ? '_blank' : ''} href={fields.linkUrl} className={`main-cta ${className}`} rel="noreferrer">
        <img className="main-cta__icon" src={fields.icon.fields.file.url} width="20" height="18" alt="Heart icon" />
        <span className="main-cta__text">{fields.linkLabel}</span>
      </a>
    </Link>
  );
}
