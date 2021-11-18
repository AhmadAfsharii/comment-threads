import React, { ReactElement } from 'react';

import NewCommentForm from './components/NewCommentForm';
import CommentView from './components/CommentView';

import { useAppSelector } from '../store/hooks';

const Comments: React.FC = (): ReactElement => {
  const {
    replyComment,
    commentsList,
  } = useAppSelector(
    (state) => state.comments,
  );

  return (
    <div className="flex flex-col gap-3">
      <h1
        className="text-3xl font-extrabold text-gray-900 pb-7"
        data-testid="title"
      >
        Comments
      </h1>

      {replyComment === null && <NewCommentForm />}

      {
        commentsList.filter((cm) => !cm.parentId)
          .map((comment) => <CommentView key={comment.id} comment={comment} />)
      }
    </div>
  );
};

export default Comments;
