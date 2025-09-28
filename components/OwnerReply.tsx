import React from 'react';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

interface OwnerReplyProps {
  reply: {
    text: string;
    repliedAt: string;
  };
}

const OwnerReply: React.FC<OwnerReplyProps> = ({ reply }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="mt-4 ml-8 pl-4 border-l-2 border-gray-200">
      <div className="flex items-center">
        <BriefcaseIcon className="h-6 w-6 text-gray-500" />
        <div className="ml-2">
            <p className="font-bold text-sm">Response from the owner</p>
            <p className="text-xs text-gray-500">on {formatDate(reply.repliedAt)}</p>
        </div>
      </div>
      <p className="mt-2 text-gray-600">{reply.text}</p>
    </div>
  );
};

export default OwnerReply;
