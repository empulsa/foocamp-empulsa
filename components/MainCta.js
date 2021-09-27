import Link from 'next/link';

export default function MainCta({ fields }) {
  return (
    <Link href="{fields.linkUrl}">
      <button className="main-cta" type="button">{fields.linkLabel}</button>
    </Link>
  );
}
