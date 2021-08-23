import Link from 'next/link';

export default function Navigation({ fields }) {
  return (

    <nav className="navBar">
      <Link href="/">
        <img className="navBar__logo" src={fields.logoImage.fields.file.url} alt="logoEmpulsa" />
      </Link>

      {fields.navItems.map((link) => (
        <Link key={link.sys.id} href="/">
          <a href="/" className="navBar__link">{link.fields.linkText}</a>
        </Link>
      ))}
      <Link href={fields.mainCtaTargetUrl}>
        <button className="navBar__button" type="button">{fields.mainCtaText}</button>
      </Link>

    </nav>
  );
}
