import React from 'react';
import SEO from '../components/SEO';
import NewsCard from '../components/NewsCard';

// Fix: Added mock news data and component implementation to resolve compilation errors.
const mockNews = [
    {
        id: 'news1',
        title: 'ReviewDotCom Launches AI-Powered Search to Enhance User Experience',
        excerpt: 'Today, we are thrilled to announce the launch of our new AI-powered search feature, designed to give users more relevant and context-aware results.',
        imageUrl: 'https://picsum.photos/seed/news1/400/200',
        date: '2023-10-27',
        category: 'Platform News'
    },
    {
        id: 'news2',
        title: 'The Top 10 Most Reviewed Restaurants in Lagos This Month',
        excerpt: 'From fine dining to local bukka, find out which Lagos restaurants are getting all the attention from our community of reviewers.',
        imageUrl: 'https://picsum.photos/seed/news2/400/200',
        date: '2023-10-25',
        category: 'Food & Drink'
    },
    {
        id: 'news3',
        title: 'Why Online Reviews Matter for Small Businesses in Nigeria',
        excerpt: 'A deep dive into how customer feedback is shaping the future of small and medium-sized enterprises across the country.',
        imageUrl: 'https://picsum.photos/seed/news3/400/200',
        date: '2023-10-22',
        category: 'Business Tips'
    }
];

const NewsPage: React.FC = () => {
    return (
        <>
            <SEO 
                title="News & Updates | ReviewDotCom"
                description="Stay up-to-date with the latest news, articles, and updates from ReviewDotCom."
            />
            <div className="space-y-8">
                <h1 className="text-4xl font-extrabold text-gray-800">News & Updates</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockNews.map(article => (
                        <NewsCard key={article.id} article={article} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default NewsPage;
