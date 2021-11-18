export type Comment = {
  id: number;
  parentId: number | undefined;
  author: string;
  text: string;
  date: string;
};

export type CommentFormInfo = {
  author: string,
  text: string
}

export type CommentsStoreState = {
  commentsList: Comment[];
  replyComment: Comment | null;
}
