"use client";

import useGenerateProfiles from "@/hooks/use-generate-stories";
import { ProfileStory } from "@/types";
import StoriesPlaceholders from "@/components/UI/LoadingPlaceholders/StoriesPlaceholders";
import Story from "../Story";

type Props = {
  children: React.ReactNode;
};

const StoriesList = ({ children }: Props) => {
  const { profiles, loading } = useGenerateProfiles(20) as {
    profiles: ProfileStory[];
    loading: boolean;
  };

  return (
    <>
      {loading && <StoriesPlaceholders />}
      {!loading && children}
      {profiles.map((profile) => (
        <Story key={profile.id} {...profile} isUser={false} />
      ))}
    </>
  );
};

export default StoriesList;
