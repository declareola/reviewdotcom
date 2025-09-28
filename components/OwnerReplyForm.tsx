import React, { useState } from 'react';
import Button from './Button';

interface OwnerReplyFormProps {
  reviewId: string;
}

const OwnerReplyForm: React.FC<OwnerReplyFormProps> = ({ reviewId }) => {
  const [replyText, setReplyText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(`Replying to review ${reviewId}:`, replyText);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setReplyText('');
      alert('Reply submitted!');
      // Here you might trigger a re-fetch of the review data
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 ml-8">
      <textarea
        rows={3}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
        placeholder="Write your reply..."
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        required
      />
      <div className="mt-2 text-right">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Posting...' : 'Post Reply'}
        </Button>
      </div>
    </form>
  );
};

export default OwnerReplyForm;
