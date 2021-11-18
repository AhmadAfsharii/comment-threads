import store from '../store';
import { Comment, CommentFormInfo } from '../types/comments';
import { addComment, cancelReply, commentReply } from './commentsSlice';

const insertSingleComment = (commentInfo: CommentFormInfo): Comment | undefined => {
  let state = store.getState().comments;
  const initialCommentsCount = state.commentsList.length;

  store.dispatch(addComment(commentInfo));

  state = store.getState().comments;
  const newComment = state.commentsList.find(
    (comment) => comment.id === initialCommentsCount + 1,
  );

  return newComment;
};

test('Comments initial state', () => {
  const state = store.getState().comments;

  expect(state.commentsList?.length).toBe(0);
  expect(state.replyComment).toBe(null);
});

test('Add new comment', () => {
  const newComment = insertSingleComment({
    author: 'testAuthor',
    text: 'testCommentText',
  });

  expect(newComment?.author).toBe('testAuthor');
  expect(newComment?.text).toBe('testCommentText');
});

test('Reply a comment', () => {
  const parentComment = insertSingleComment({
    author: 'parentTestAuthor',
    text: 'parentTestText',
  });

  expect(parentComment).toBeTruthy();

  if (parentComment) {
    store.dispatch(commentReply(parentComment));

    const { replyComment } = store.getState().comments;
    expect(replyComment).toBe(parentComment);

    const childComment = insertSingleComment({
      author: 'childTestAuthor',
      text: 'childTestText',
    });

    expect(childComment?.parentId).toBe(parentComment.id);
  }
});

test('Cancel comment reply', () => {
  const newComment = insertSingleComment({
    author: 'testAuthor',
    text: 'testCommentText',
  });

  expect(newComment).toBeTruthy();

  if (newComment) {
    store.dispatch(commentReply(newComment));
    store.dispatch(cancelReply());

    const { replyComment } = store.getState().comments;
    expect(replyComment).toBeFalsy();
  }
});
