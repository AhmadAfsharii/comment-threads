import React, { ReactElement } from 'react';

import NewCommentForm from './NewCommentForm';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { Comment } from '../types';
import { commentReply } from '../state/commentsSlice';

const CommentView: React.FC<{ comment: Comment }> = ({ comment }): ReactElement => {
  const {
    replyComment,
    commentsList,
  } = useAppSelector((state) => state.comments);
  const dispatch = useAppDispatch();

  return (
    <article className="p-2 m-1 border-l-2 border-yellow-600 rounded flex flex-col shadow-md">
      <div className="flex flex-row gap-2 items-center mb-3">
        <h6 className="font-bold">
          {comment.author}
        </h6>

        <span>-</span>

        <time dateTime={new Date(comment.date).toISOString()} className="font-light text-gray-500">
          {comment.date}
        </time>
      </div>

      <p className="mb-3">
        {comment.text}
      </p>

      <div className="mb-3">
        <button
          onClick={() => dispatch(commentReply(comment))}
          type="button"
          className="text-gray-400 text-sm font-bold hover:text-gray-500"
        >
          Reply
        </button>
      </div>

      {
        commentsList.filter((cm) => cm.parentId === comment.id)
          .map((childComment) => <CommentView key={childComment.id} comment={childComment} />)
      }

      {replyComment?.id === comment.id && <NewCommentForm />}
    </article>
  );
};

export default CommentView;
