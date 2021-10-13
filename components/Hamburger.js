export default function Hamburger({ onClick, active }) {
  const className = active ? 'hamburger hamburger--active' : 'hamburger';
  return (
    <button className={className} type="button" onClick={onClick}>
      <i className="hamburger__line" />
      <i className="hamburger__line" />
      <i className="hamburger__line" />
    </button>
  );
}
