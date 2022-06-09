import React from 'react';
import FAQItem from './FAQItem';

const DATA = [
    {
        question: 'How many team members can I invite?',
        answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    },
    {
        question: 'What is the maximum file upload size?',
        answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
    },
    {
        question: 'How do I reset my password?',
        answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    },
    {
        question: 'Can I cancel my subscription?',
        answer: 'Yes! Send us a message and we’ll process your request no questions asked.',
    },
    {
        question: 'Do you provide additional support?',
        answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
    },
];
export default function Quest() {
    return (
        <div className="faq">
            <h1 className="faq-heading">FAQ</h1>
            <div className="faq-scroll">
                {DATA.map((item, index) => (
                    <FAQItem key={index} data={item} />
                ))}
            </div>
        </div>
    );
}
