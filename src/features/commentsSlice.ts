import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import date from '../utils/date';

import { CommentFormInfo, Comment, CommentsStoreState } from '../types/comments';

const getDefaultState = (): CommentsStoreState => ({
  commentsList: [],
  replyComment: null,
});

const commentsReducer = createSlice({
  name: 'comments',

  initialState: getDefaultState(),

  reducers: {
    addComment: (state, { payload }: PayloadAction<CommentFormInfo>) => {
      const comment: Comment = {
        id: state.commentsList.length + 1,
        author: payload.author,
        text: payload.text,
        date: date.currentDate(),
        parentId: state.replyComment?.id,
      };

      state.commentsList.push(comment);
    },

    commentReply: (state, { payload }: PayloadAction<Comment>) => {
      state.replyComment = payload;
    },

    cancelReply: (state) => {
      state.replyComment = null;
    },
  },
});

export const {
  addComment,
  cancelReply,
  commentReply,
} = commentsReducer.actions;

export default commentsReducer.reducer;
