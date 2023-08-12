import Image from "next/image";

export default function MiniProfile() {
  return (
    <article className="flex items-center justify-between ml-5 mb-4">
      <Image
        src="https://i1.sndcdn.com/avatars-EgQrcnU0I9hGOzXB-Xw1bHA-t500x500.jpg"
        alt="User Profile Image"
        height={64}
        width={64}
        style={{ width: "auto" }}
        className="rounded-full border p-0.5"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold whitespace-nowrap">Tarek Elkanaria</h2>
        <h3 className="text-sm text-gray-400 whitespace-nowrap">
          Welcome to Instagram
        </h3>
      </div>
      <button className="text-sm font-semibold text-blue-400 whitespace-nowrap">
        Sign out
      </button>
    </article>
  );
}
