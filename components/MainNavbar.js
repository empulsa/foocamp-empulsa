import { useState } from 'react';
import Link from 'next/link';
import MainCta from './MainCta';
import Hamburger from './Hamburger';

export default function NavegationMain({ fields }) {
  const [menu, setMenu] = useState(false);
  const { logo, navItems, ctaButton } = fields;

  return (
    <>
      <div className={menu
        ? 'mainNavbar__wrapper mainNavbar__wrapper--mobile-active'
        : 'mainNavbar__wrapper'}
      >
        <Hamburger
          active={menu}
          onClick={() => { setMenu(!menu); }}
        />
        <div className="mainNavbar__brand">
          <Link href="/">
            <img className="mainNavbar__img" src={logo.fields.image.fields.file.url} alt={fields.logo.fields.nombre} />
          </Link>
        </div>
        <ul className="mainNavbar__ul">
          {navItems.map((navItem) => {
            const { linkUrl, linkLabel, subLinks } = navItem.fields;
            const arrowClass = subLinks ? 'mainNavbar__arrow' : '';
            return (
              <li className="mainNavbar__li" key={navItem.sys.id}>
                <Link href={`${linkUrl}`}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className={`mainNavbar__link ${arrowClass}`}>
                    {linkLabel}
                  </a>
                </Link>
                {subLinks
                && (
                <ul className="mainNavbar__subUl">
                  {subLinks.map((subLink) => (
                    <li className="mainNavbar__subLi" key={subLink.sys.id}>
                      <Link href={`${subLink.fields.linkUrl}`}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="mainNavbar__link">
                          {subLink.fields.linkLabel}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
                )}
              </li>
            );
          })}
          <li>
            <MainCta fields={fields.ctaButton.fields} className="mainNavbar__btn" />
          </li>
        </ul>
        <MainCta fields={ctaButton.fields} className="mainNavbar__btn mainNavbar__heart" />
      </div>
    </>
  );
}
