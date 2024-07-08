import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are your interest rates?",
      answer: "This application provides unlimited investment opportunities. You can explore various financial products, track your investments, and make informed decisions based on detailed analytics and expert advice."
    },
    {
      question: "What happens to my interest when i switch to Halal?",
      answer: "To create an account, click on the 'Sign Up' button at the top right corner of the homepage. Fill in your details, verify your email address, and you will be ready to start using our services."
    },
    {
      question: "What is the minimum interest rate i am entitled to?",
      answer: "Yes, we take data security very seriously. All your personal information is encrypted and stored securely. We adhere to strict privacy policies and comply with all relevant regulations."
    },
    {
      question: "What is Ardilla?",
      answer: "You can contact our customer support team via the 'Contact Us' page. We offer support through email, phone, and live chat. Our support team is available 24/7 to assist you with any queries or issues."
    },
    {
      question: "Are there any fees for using the services?",
      answer: "Our basic services are free to use. However, we offer premium plans with additional features at a nominal fee. You can check our pricing page for more details on the available plans and their respective fees."
    },
    
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-8xl mx-auto p-8 mb-[5rem]">
      <h1 className="max-w-8xl px-6 text-3xl font-bold mb-6 text-[#3D0072]">Questions we have been asked?</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 max-w-4xl mx-auto">
          <div
            className="flex justify-between items-center cursor-pointer p-4 bg-gray-100 rounded"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="text-xl font-semibold text-[#8807F7]">{faq.question}</h2>
            {activeIndex === index ? <FaMinus /> : <FaPlus />}
          </div>
          {activeIndex === index && (
            <div className="mt-2 p-4 bg-gray-50 border-l-2 border-gray-300">
              <p className="text-[#8807F7]">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
