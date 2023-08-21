import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { nanoId } from "minifaker";
import Story from "./Story";
import StoriesList from "./StoriesList";

export default async function Stories() {
  const session = await getServerSession(authOptions);
  return (
    <section className="lg:col-span-2 mx-2 lg:mx-0 flex space-x-2 bg-white border border-gray-200 rounded-sm p-6 mb-8 overflow-x-auto sm:scrollbar-h-2.5 scroll-parent">
      <StoriesList>
        {session && (
          <Story
            id={nanoId.nanoid()}
            profileImg={session?.user.image as string}
            profileName={session?.user.username}
            isUser={true}
          />
        )}
      </StoriesList>
    </section>
  );
}
