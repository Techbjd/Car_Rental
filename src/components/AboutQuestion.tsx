
import React from "react";

interface Question {
  question: string;
  answer: string;
}

interface AboutQuestionProps {
  questions: Question[];
}
const AboutQuestion: React.FC<AboutQuestionProps> = ({ questions }) => {
  return (
    <div className="max-w-[1296px] mx-auto px-6 py-16 flex flex-col gap-10">
      <p className="text-3xl font-bold">Top Car Rental Questions</p>

      <div className="flex flex-col gap-6">
        {questions.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gray-400 rounded-2xl p-8 flex flex-col gap-4"
          >
            <p className="text-lg font-semibold">{item.question}</p>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutQuestion;
