/* This example requires Tailwind CSS v2.0+ */
const faqs = [
    {
      id: 0,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        id: 2,
        question: "What's the best thing about Switzerland?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        id: 3,
        question: "What's the best thing about Switzerland?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        id: 4,
        question: "What's the best thing about Switzerland?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        id: 5,
        question: "What's the best thing about Switzerland?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
    // More questions...
  ]
  
  export default function Faq() {
    return (
      <div className="bg-primary-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">Frequently asked questions</h2>
          <div className="mt-6 border-t border-primary-300 border-opacity-25 pt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-lg leading-6 font-medium text-white">{faq.question}</dt>
                  <dd className="mt-2 text-base text-primary-200">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  