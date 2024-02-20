import React, { useState } from 'react';
import { addComment } from '../../lib/calls';
import { usePostId } from '@/app/dashboard/post/[user_id]/page';

interface CommentsModalProps {
    expId: string;
    isOpen: boolean;
    handleClose: () => void;
}

const CommentsModal = ({ expId, isOpen, handleClose }: CommentsModalProps) => {
    const postId = usePostId() ?? ""

    const [newComment, setNewComment] = useState('');
    const handleAddComment = () => {
        console.log(postId);
        addComment(postId, expId, newComment)
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
                <div className="fixed inset-0 bg-black opacity-75" onClick={handleClose}></div>

                <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Comments
                    </h3>

                    <div className="mt-2 max-h-60 overflow-y-auto">
                        {/* list comments here */}
                    </div>

                    <div className="mt-4">
                        <input
                            type="text"
                            className="mt-1 p-2 w-full rounded-lg border-gray-300 shadow-sm"
                            placeholder="Add a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-end items-center mt-4">

                        <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-purple px-4 py-2 text-sm font-medium text-white"
                            onClick={() => {handleAddComment(); handleClose();}}
                        >
                            Add Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentsModal;
