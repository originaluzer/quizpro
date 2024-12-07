import React from 'react'

function Hiw() {
  return (
<>
<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2" id="hiw">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        How it works
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block">
      QuizPro lets you challenge your knowledge across a wide range of exciting categories, from history and science to pop culture and more. With the help of smart AI-powered hints, you can get personalized assistance whenever you're stuck, making it easier to progress and learn. Track your scores, monitor your improvement, and push yourself to beat your best results. Whether you're looking to test your expertise or discover something new, Quiz Pro offers a fun, interactive way to engage with your favorite topics and level up your knowledge. Start quizzing today!
      </p>

      <div className="mt-4 md:mt-8">
      </div>
    </div>
  </div>

  <img
    alt=""
    src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h-56 w-full object-cover sm:h-full"
  />
</section>
</>
  )
}

export default Hiw