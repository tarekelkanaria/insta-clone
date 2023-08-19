import type { Timestamp } from "firebase/firestore";
export interface ProfileStory {
  id: string;
  profileName: string;
  profileImg: string;
}

export interface ProfileSuggestion extends ProfileStory {
  profileJob: string;
}
export interface UploadedPost {
  userName: string;
  userImg: string;
  caption: string;
  postImg: string;
}

export interface UploadedComment {
  userName: string;
  userImg: string;
  comment: string;
}
export interface UploadedLike {
  userName: string;
  userImg: string;
  userId: string;
}
export interface RetrievedPost extends UploadedPost {
  id: string;
  timestamp: Timestamp;
}
export interface RetrievedComment extends UploadedComment {
  id: string;
  timestamp: Timestamp;
}
export interface RetrievedLike {
  id: string;
  userName: string;
  userImg: string;
}
