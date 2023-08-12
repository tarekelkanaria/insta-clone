import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";

export default function SideBar() {
  return (
    <section className="fixed w-80 xl:w-[380px]">
      <MiniProfile />
      <Suggestions />
    </section>
  );
}
