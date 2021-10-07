import Link from 'next/link';

export default function MainCta({ fields }) {
  return (
    <Link href={fields.linkUrl}>
      <a target={fields.externalLink ? '_blank' : ''} href={fields.linkUrl} className="main-cta" rel="noreferrer">
        <img className="main-cta__icon" src={fields.icon.fields.file.url} width="20" height="18" alt="Heart icon" />
        {fields.linkLabel}
      </a>
    </Link>
  );
}
