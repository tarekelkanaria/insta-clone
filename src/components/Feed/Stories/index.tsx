"use client";

import { ProfileStory } from "@/types";
import useGenerateProfiles from "@/hooks/use-generate-stories";
import Story from "./Story";
import StoriesPlaceholders from "./StoriesPlaceholders";

const Stories = () => {
  const { profiles, loading } = useGenerateProfiles(20) as {
    profiles: ProfileStory[];
    loading: boolean;
  };
  return (
    <section className="lg:col-span-2 mx-2 lg:mx-0 flex space-x-2 bg-white border border-gray-200 rounded-sm p-6 mb-8 overflow-x-auto scrollbar-none sm:hover:scrollbar sm:scrollbar-h-2.5 sm:scrollbar-track-slate-100 sm:scrollbar-thumb-gray-400 sm:scrollbar-thumb-rounded-full">
      {loading && <StoriesPlaceholders />}
      {profiles.map((profile) => (
        <Story key={profile.id} {...profile} />
      ))}
    </section>
  );
};

export default Stories;
