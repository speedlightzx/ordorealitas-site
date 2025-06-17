'use client'

interface iQuestionRes {
    question: string,
    response: string
}

export default function QuestionResponse({question, response}: iQuestionRes) {
    return (
        <div className="border-2 rounded-md w-full h-screen max-h-[25vh] lg:max-w-[75vh] border-[#7F00FF] text-white p-3">
            <h1 className="lg:text-2xl text-[18px] font-semibold text-center mb-3 underline">{question}</h1>
            <p className="text-sm">{response}</p>
        </div>
    )
}