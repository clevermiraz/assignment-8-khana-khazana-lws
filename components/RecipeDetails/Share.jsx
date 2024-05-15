"use client";

import { useState } from "react";
import {
    FacebookIcon,
    FacebookShareButton,
    RedditIcon,
    RedditShareButton,
    TwitterIcon,
    TwitterShareButton,
} from "react-share";
import ShareModal from "./ShareModal";

export default function Share() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]" onClick={openModal}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M8.7 10.7l6.6 -3.4" />
                    <path d="M8.7 13.3l6.6 3.4" />
                </svg>
                <span>Share</span>
            </div>
            <ShareModal isOpen={isModalOpen} onClose={closeModal}>
                <div className="flex gap-4">
                    <FacebookShareButton url={window.location.href}>
                        <FacebookIcon size={36} round />
                    </FacebookShareButton>
                    <TwitterShareButton url={window.location.href}>
                        <TwitterIcon size={36} round />
                    </TwitterShareButton>
                    <RedditShareButton url={window.location.href}>
                        <RedditIcon size={36} round />
                    </RedditShareButton>
                </div>
            </ShareModal>
        </>
    );
}
