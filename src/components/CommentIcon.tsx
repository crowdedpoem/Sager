"use client"
import React, { useState } from 'react';
import { FaComment } from "react-icons/fa";
import CommentsModal from './CommentsModal';

interface CommentIconProps {
    expId: string;
}

const CommentButton = ({expId}: CommentIconProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button
                className={`w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center focus:outline-none bg-gray-200'
                }`}
                onClick={handleOpen}
            >
                <FaComment className="w-4 h-4 text-black" />
            </button>

            <CommentsModal expId={expId} isOpen={isOpen} handleClose={handleClose} />
        </div>

    );
};

export default CommentButton;
