import { useState } from 'react';
import Link from 'next/link';
import MainCta from './MainCta';

export default function NavegationMain({ fields }) {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className={menu
        ? 'mainNavbar__wrapper mainNavbar__wrapper--mobile-active'
        : 'mainNavbar__wrapper'}
      >
        <button className="mainNavbar__burguer" type="button" onClick={() => { setMenu(!menu); }}>
          ☰
        </button>
        <Link href="/">
          <img className="mainNavbar__img" src={fields.logo.fields.image.fields.file.url} alt={fields.logo.fields.nombre} />
        </Link>
        <ul className="mainNavbar__ul">
          <li className="mainNavbar__li">
            <a href={`${fields.navItems[0].fields.linkUrl}`} className="mainNavbar__link">
              {fields.navItems[0].fields.linkLabel}
            </a>
          </li>
          <li className="mainNavbar__li ">
            <a className="mainNavbar__link arrow" href={`${fields.navItems[1].fields.linkUrl}`}>
              {fields.navItems[1].fields.linkLabel}
            </a>
            <ul className="mainNavbar__subUl">
              <li className="mainNavbar__subLi">
                <a className="mainNavbar__link" href={`${fields.navItems[1].fields.subLinks[0].fields.linkUrl}`}>{fields.navItems[1].fields.subLinks[0].fields.linkLabel}</a>
              </li>
              <li className="mainNavbar__subLi">
                <a className="mainNavbar__link" href={`${fields.navItems[1].fields.subLinks[1].fields.linkUrl}`}>{fields.navItems[1].fields.subLinks[1].fields.linkLabel}</a>
              </li>
            </ul>
          </li>
          <li className="mainNavbar__li">
            <a className="mainNavbar__link arrow" href={`${fields.navItems[2].fields.linkUrl}`}>
              {fields.navItems[2].fields.linkLabel}
            </a>
            <ul className="mainNavbar__subUl">
              <li className="mainNavbar__subLi">
                <a className="mainNavbar__link" href={`${fields.navItems[2].fields.subLinks[0].fields.linkUrl}`}>{fields.navItems[2].fields.subLinks[0].fields.linkLabel}</a>
              </li>
              <li className="mainNavbar__subLi">
                <a className="mainNavbar__link" href={`${fields.navItems[2].fields.subLinks[1].fields.linkUrl}`}>{fields.navItems[2].fields.subLinks[1].fields.linkLabel}</a>
              </li>
              <li className="mainNavbar__subLi">
                <a className="mainNavbar__link" href={`${fields.navItems[2].fields.subLinks[2].fields.linkUrl}`}>{fields.navItems[2].fields.subLinks[2].fields.linkLabel}</a>
              </li>
              <li className="mainNavbar__subLi">
                <a className="mainNavbar__link" href={`${fields.navItems[2].fields.subLinks[3].fields.linkUrl}`}>{fields.navItems[2].fields.subLinks[3].fields.linkLabel}</a>
              </li>
              <li className="mainNavbar__subLi">
                <a className="mainNavbar__link" href={`${fields.navItems[2].fields.subLinks[4].fields.linkUrl}`}>{fields.navItems[2].fields.subLinks[4].fields.linkLabel}</a>
              </li>
              <li className="mainNavbar__subLi">
                <a className="mainNavbar__link" href={`${fields.navItems[2].fields.subLinks[5].fields.linkUrl}`}>{fields.navItems[2].fields.subLinks[5].fields.linkLabel}</a>
              </li>
            </ul>
          </li>
          <li>
            <MainCta fields={fields.ctaButton.fields} className="mainNavbar__btn" />
          </li>
        </ul>
        <MainCta fields={fields.ctaButton.fields} className="mainNavbar__btn mainNavbar__heart" />
      </div>
    </>
  );
}
