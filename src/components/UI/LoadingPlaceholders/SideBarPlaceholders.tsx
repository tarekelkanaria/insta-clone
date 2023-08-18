import SuggestionsPlaceholders from "./SuggestionsPlaceholders";

export default function SideBarPlaceholders() {
  return (
    <section className="fixed w-80 xl-w-[380px] ">
      <article className="flex items-center justify-between ml-5 mb-2">
        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
        <div className="flex-1 ml-4">
          <div className="h-1 w-5 rounded-md bg-gray-300 "></div>
          <div className="w-6 h-2 rounded-lg bg-gray-200"></div>
        </div>
        <div className="w-8 h-8 rounded-lg bg-gray-200"></div>
      </article>
      <article className="ml-5">
        <div className="flex items-center justify-between mb-2">
          <div className="w-6 h-2 rounded-lg bg-gray-200"></div>
          <div className="w-8 h-8 rounded-lg bg-gray-200"></div>
        </div>
        <SuggestionsPlaceholders />
      </article>
    </section>
  );
}
