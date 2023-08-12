import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  return (
    <li className="flex space-x-2 items-center p-2 bg-gray-50 border border-gray-500 rounded-md focus-within:border-sky-500 focus-within:ring-sky-500">
      <AiOutlineSearch className="text-gray-500 text-xl" />
      <input
        type="search"
        placeholder="Search"
        className="focus:outline-none bg-transparent text-sm"
      />
    </li>
  );
}
