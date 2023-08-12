import Feed from "@/components/Feed";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 lg:grid-flow-row-dense lg:grid-cols-3 lg:max-w-6xl mx-auto">
        <Feed />
        <aside className="hidden lg:inline-grid">
          <SideBar />
        </aside>
      </main>
    </>
  );
}
