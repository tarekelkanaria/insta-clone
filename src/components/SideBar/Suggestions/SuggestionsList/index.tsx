"use client";

import useGenerateProfiles from "@/hooks/use-generate-stories";
import Image from "next/image";
import { ProfileSuggestion } from "@/types";
import SuggestionsPlaceholders from "@/components/UI/LoadingPlaceholders/SuggestionsPlaceholders";

const SuggestionsList = () => {
  const { profiles, loading } = useGenerateProfiles(5, true) as {
    profiles: ProfileSuggestion[];
    loading: boolean;
  };

  return (
    <>
      {loading && <SuggestionsPlaceholders />}
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mb-3"
        >
          <Image
            src={profile.profileImg}
            alt={profile.profileName}
            height={40}
            width={40}
            style={{ maxWidth: "40px", height: "auto" }}
            className="rounded-full border p-0.5 object-contain"
          />
          <div className="flex-1 ml-4">
            <h2 className="text-sm font-semibold">{profile.profileName}</h2>
            <h3 className="text-sm text-gray-400 truncate w-56">
              {profile.profileJob}
            </h3>
          </div>
          <button type="button" className="text-sm font-semibold text-blue-400">
            Follow
          </button>
        </div>
      ))}
    </>
  );
};

export default SuggestionsList;
