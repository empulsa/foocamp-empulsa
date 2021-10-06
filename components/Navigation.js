export default function NavegationMain({ fields }) {
  return (
    <>
      <div>
        <img className="mainNavbar__img" src={`${fields.logo.fields.image.fields.file.url}`} alt="" />
      </div>
      <ul className="mainNavbar__ul">
        <li className="mainNavbar__li"><a href={`${fields.navItems[0].fields.linkUrl}`}>{fields.navItems[0].fields.linkLabel}</a></li>
        <li className="mainNavbar__li ">
          <a className="arrow" href={`${fields.navItems[1].fields.linkUrl}`}>{fields.navItems[1].fields.linkLabel}</a>
          <ul className="mainNavbar__subUl">
            <li className="mainNavbar__subLi"><a href={`${fields.navItems[1].fields.subLinks[0].fields.linkUrl}`}>{fields.navItems[1].fields.subLinks[0].fields.linkLabel}</a></li>
            <li className="mainNavbar__subLi"><a href={`${fields.navItems[1].fields.subLinks[1].fields.linkUrl}`}>{fields.navItems[1].fields.subLinks[1].fields.linkLabel}</a></li>
          </ul>
        </li>
        <li className="mainNavbar__li">
          <a className="arrow" href={`${fields.navItems[2].fields.linkUrl}`}>{fields.navItems[2].fields.linkLabel}</a>
          <ul className="mainNavbar__subUl">
            <li className="mainNavbar__subLi"><a href={`${fields.navItems[2].fields.subLinks[0].fields.linkUrl}`}>{fields.navItems[2].fields.subLinks[0].fields.linkLabel}</a></li>
            <li className="mainNavbar__subLi"><a href={`${fields.navItems[2].fields.subLinks[1].fields.linkUrl}`}>{fields.navItems[2].fields.subLinks[1].fields.linkLabel}</a></li>
            <li className="mainNavbar__subLi"><a href={`${fields.navItems[2].fields.subLinks[2].fields.linkUrl}`}>{fields.navItems[2].fields.subLinks[2].fields.linkLabel}</a></li>
            <li className="mainNavbar__subLi"><a href={`${fields.navItems[2].fields.subLinks[3].fields.linkUrl}`}>{fields.navItems[2].fields.subLinks[3].fields.linkLabel}</a></li>
            <li className="mainNavbar__subLi"><a href={`${fields.navItems[2].fields.subLinks[4].fields.linkUrl}`}>{fields.navItems[2].fields.subLinks[4].fields.linkLabel}</a></li>
            <li className="mainNavbar__subLi"><a href={`${fields.navItems[2].fields.subLinks[5].fields.linkUrl}`}>{fields.navItems[2].fields.subLinks[5].fields.linkLabel}</a></li>
          </ul>
        </li>
      </ul>

    </>
  );
}
