
import React from 'react';
// Fix: Removed .tsx extension from import
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
    return (
        <>
            <SEO
                title="About Us | ReviewDotCom"
                description="Learn about the mission, vision, and values of ReviewDotCom - Nigeria's most trusted platform for transparent feedback on businesses, services, and institutions."
            />
            <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-lg border border-gray-200">
                <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 text-center mb-8">About ReviewDotCom</h1>
                
                <div className="space-y-10 text-lg text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-emerald-500 pb-2">Our Mission</h2>
                        <p>
                            Our mission is to empower every Nigerian with the information they need to make better, more informed decisions. We provide a transparent and trustworthy platform where citizens can share honest, unfiltered feedback about businesses, services, and institutions across the country. By amplifying every voice, we aim to foster a culture of accountability and excellence.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-emerald-500 pb-2">Our Vision</h2>
                        <p>
                            We envision a Nigeria where consumer feedback directly drives improvement and innovation. Our goal is to become the nation's most trusted and comprehensive review platform, a central hub where the collective experience of the people builds a more reliable and responsive marketplace for everyone.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-emerald-500 pb-2">Our Values</h2>
                        <ul className="list-disc list-inside space-y-4">
                            <li>
                                <span className="font-semibold">Authenticity:</span> We are committed to genuine, verified reviews from real people. We actively combat fake or misleading feedback to maintain the integrity of our platform.
                            </li>
                            <li>
                                <span className="font-semibold">Community:</span> We believe in the power of a collective voice. Our platform is built on the foundation of a strong, engaged community that helps one another through shared experiences.
                            </li>
                            <li>
                                <span className="font-semibold">Empowerment:</span> We provide the tools and the platform for individuals to be heard and for businesses to listen, learn, and grow. Knowledge is power, and we put that power in the hands of the Nigerian people.
                            </li>
                            <li>
                                <span className="font-semibold">Transparency:</span> We operate with openness, ensuring that both consumers and businesses have a clear and fair opportunity to engage in constructive dialogue.
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
