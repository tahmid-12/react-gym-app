const NewsLetter = () => {
    return (
      <div className="m-auto text-white px-6 py-8 bg-[#24262b] shadow-lg ">
          <div className="mx-auto grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 my-4">
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[#00df9a]">Need advice on improving your workflow?</h1>
                  <p className="text-lg text-gray-300">Sign up to join our newsletter and stay up to date with the latest tips and trends.</p>
              </div>
              <div className="my-4">
                  <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                      <input type="email" placeholder="Enter Email" className="p-3 w-full rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00df9a]"/>
                      <button className="bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:bg-[#00c17a] transition-colors duration-300">Notify Me</button>
                  </div>
                  <p className="text-sm text-gray-400">We are concerned about the security of your data. Read our <span className="text-[#00df9a] hover:underline cursor-pointer transition-all duration-300">Privacy Policy</span>.</p>
              </div>
          </div>
          <hr className="my-8 bg-gray-700 border-none h-[1px]" />
      </div>
    )
  }
  
  export default NewsLetter;  