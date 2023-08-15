import Feed from "@/components/Feed";
import SideBar from "@/components/SideBar";
import MainContainer from "@/components/UI/MainContainer";
import UploadModal from "@/components/UploadModal";

export default function Home() {
  return (
    <>
      <MainContainer>
        <Feed />
        <aside className="hidden lg:inline-grid">
          <SideBar />
        </aside>
      </MainContainer>
      <UploadModal />
    </>
  );
}
