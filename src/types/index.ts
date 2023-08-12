export interface ProfileStory {
  id: string;
  profileName: string;
  profileImg: string;
}
export interface ProfileSuggestion extends ProfileStory {
  profileJob: string;
}
export interface UserPost {
  id: string;
  userName: string;
  userImg: string;
  postImg: string;
  caption: string;
}
