import Link from 'next/link';

export default function MainCta({ fields }) {
  return (
    <Link href={fields.linkUrl}>
      <button className="main-cta" type="button">
        <img className="main-cta__icon" src={fields.icon.fields.file.url} width="20" height="18" alt="Heart icon" />
        {fields.linkLabel}
      </button>
    </Link>
  );
}
