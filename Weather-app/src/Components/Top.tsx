import React from 'react'

const Top = () => {
  return (
    <div className='flex flex-col  bg-slate-500 sticky top-0 left-0'>
      <form className="w-full flex justify-center  p-4">
        <div className="flex items-center px-2 bg-gray-500 border border-gray-400 rounded-2xl focus-within:border-blue-500 ">
          <input
            className=" bg-gray-500 border-0 border-gray-400  w-96 h-8 text-gray-50 focus:outline-none text-1xl"
            type="text"
            name="Search"
            id="Search"
            placeholder='Search location...'
          />
          <button
            className="rounded-r text-white "
            type="submit"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Top
