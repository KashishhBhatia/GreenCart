import React from 'react'

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 mt-24 pb-14 px-4">
      <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal!</h1>
      <p className="md:text-lg text-gray-500/70 pb-6 max-w-xl">
        Subscribe to get the latest offers, new arrivals, and exclusive discounts
      </p>

      <form
        className="w-full max-w-2xl flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0"
      >
        <input
          className="flex-grow border border-gray-300 rounded-md sm:rounded-r-none h-12 px-4 text-gray-600 outline-none"
          type="email"
          placeholder="Enter your email id"
          required
        />
        <button
          type="submit"
          className="h-12 bg-primary hover:bg-primary-dull text-white px-6 sm:px-12 rounded-md sm:rounded-l-none transition-all"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLetter
