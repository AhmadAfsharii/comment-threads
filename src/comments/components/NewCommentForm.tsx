import React, {
  FormEvent, ReactElement, useEffect, useRef,
} from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { saveComment, cancelReply } from '../state/commentsSlice';

import { CommentFormInfo } from '../types';

function submitForm(event: FormEvent<HTMLFormElement>): CommentFormInfo {
  event.preventDefault();

  const form = (event.target as HTMLFormElement);
  const comment: CommentFormInfo = {
    author: (form.elements.namedItem('author') as HTMLInputElement).value,
    text: (form.elements.namedItem('text') as HTMLTextAreaElement).value,
  };

  form.reset();

  return comment;
}

const NewCommentForm: React.FC = (): ReactElement => {
  const replyComment = useAppSelector((state) => state.comments.replyComment);
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (replyComment) {
      formRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [replyComment]);

  return (
    <form
      className="flex flex-col gap-3 p-1"
      ref={formRef}
      onSubmit={(event) => dispatch(saveComment(submitForm(event)))}
    >
      {
        replyComment && (
          <div className="flex flex-row items-center gap-3 font-bold text-yellow-600">
            <button type="button" onClick={() => dispatch(cancelReply())}>X</button>

            <span>
              Replying to
              {` ${replyComment.author}`}
              :
            </span>
          </div>
        )
      }

      <label htmlFor="author" className="flex flex-col text-gray-700 text-sm font-normal">
        <span className="mb-2">Name:</span>

        <input
          name="author"
          required
          placeholder="Enter your name..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </label>

      <label htmlFor="text" className="flex flex-col text-gray-700 text-sm font-normal">
        <span className="mb-2">Comment:</span>

        <input
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          name="text"
          placeholder="Enter your comment..."
        />
      </label>

      <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default NewCommentForm;
