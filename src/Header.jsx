export function Header() {
  return (
    <header>
      <nav className="bg-slate-50 p-3">
        <a className="hover:bg-slate-300 opacity-75 p-2 rounded-lg font-medium" href="#">
          Home
        </a>
        |{" "}
        <a className="hover:bg-slate-300 opacity-75 p-2 rounded-lg font-medium" href="#">
          Link
        </a>
      </nav>
    </header>
  );
}
