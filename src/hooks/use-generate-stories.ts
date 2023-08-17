"use client";

import { array, username, jobTitle, nanoId } from "minifaker";
import "minifaker/locales/en";
import { useState, useEffect, useMemo } from "react";
import { ProfileStory, ProfileSuggestion } from "@/types";

const useGenerateProfiles = (usersCount: number, withJob?: boolean) => {
  const [profiles, setProfiles] = useState<
    ProfileStory[] | ProfileSuggestion[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);

  const uniqueUsers: Set<number> = useMemo(() => new Set(), []);

  useEffect(() => {
    const createUniqueUsers = (usersCount: number): Set<number> => {
      while (uniqueUsers.size < usersCount) {
        uniqueUsers.add(Math.ceil(Math.random() * 70));
      }
      return uniqueUsers;
    };
    createUniqueUsers(usersCount);
    const uniqueUser = uniqueUsers.values();

    const generateProfiles: ProfileStory[] | ProfileSuggestion[] = array(
      usersCount,
      () => ({
        id: nanoId.nanoid(),
        profileName: username({ locale: "en" }).toLowerCase(),
        profileImg: `https://i.pravatar.cc/150?img=${uniqueUser.next().value}`,
        profileJob: withJob ? jobTitle() : null,
      })
    );

    setProfiles(generateProfiles);
    setLoading(false);
  }, [usersCount, withJob, uniqueUsers]);

  return { profiles, loading };
};

export default useGenerateProfiles;
