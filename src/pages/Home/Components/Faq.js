import { useEffect, useState } from "react";
import { getAllFaqs } from "../../../services";

/* This example requires Tailwind CSS v2.0+ */
export default function Faq() {
  const [isLoading, setIsLoading] = useState(true);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    getAllFaqs().then((resp) => (setFaqs(resp.data), setIsLoading(false)))
  }, [])
  return (
    <div className="bg-primary-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">Questions fréquemment posées</h2>
        <div className="mt-6 border-t border-primary-300 border-opacity-25 pt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-lg leading-6 font-medium text-white">{faq.attributes.question}</dt>
                <dd className="mt-2 text-base text-primary-200">{faq.attributes.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
