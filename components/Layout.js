export default function Layout({ children }) {
  return (
    <div className="layout">

      <div className="page-content">
        {children}
      </div>

    </div>
  );
}
