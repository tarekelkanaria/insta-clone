import Feed from "@/components/Feed";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <>
      <Feed />
      <aside className="hidden lg:inline-grid">
        <SideBar />
      </aside>
    </>
  );
}
