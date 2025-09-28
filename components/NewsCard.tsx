import React from 'react';
import { Link } from 'react-router-dom';

// Fix: Implemented the NewsCard component to resolve compilation errors.
interface NewsCardProps {
    article: {
        id: string;
        title: string;
        excerpt: string;
        imageUrl: string;
        date: string;
        category: string;
    }
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };
    
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <Link to={`/news/${article.id}`} className="block">
                <img className="h-48 w-full object-cover" src={article.imageUrl} alt={article.title} />
            </Link>
            <div className="p-6 flex-grow flex flex-col">
                <p className="text-sm font-semibold text-emerald-600">{article.category}</p>
                <Link to={`/news/${article.id}`} className="block mt-2">
                    <h3 className="text-xl font-bold text-gray-900 hover:text-emerald-700">{article.title}</h3>
                </Link>
                <p className="mt-3 text-base text-gray-600 flex-grow">{article.excerpt}</p>
                <div className="mt-6 flex items-center">
                    <p className="text-sm text-gray-500">
                        {formatDate(article.date)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
