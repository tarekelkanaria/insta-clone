import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Menu from "./Menu";

export default async function Header() {
  return (
    <>
      <ul className="container flex items-center justify-between max-w-6xl px-2 xl:px-0">
        <Logo />
        <SearchBar />
        <Menu />
      </ul>
    </>
  );
}
