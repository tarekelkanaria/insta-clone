import SuggestionsList from "./SuggestionsList";

export default function Suggestions() {
  return (
    <article className="ml-5">
      <div className="flex items-center justify-between mb-5 text-sm">
        <h2 className="font-bold text-gray-400">Suggestion for you</h2>
        <button className="font-semibold text-gray-600">See All</button>
      </div>
      <SuggestionsList />
    </article>
  );
}
