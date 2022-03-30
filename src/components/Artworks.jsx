import ethlogo from '../assets/ethlogo.png'

const Artworks = () => {
  return (
    <div className="bg-[#131835] py-10">
      <div className="w-4/5 mx-auto">
        <h4 className="text-gradient uppercase text-2xl">Artworks</h4>

        <div className="flex flex-wrap justify-start items-center mt-4">
          {Array(10)
            .fill()
            .map((item, i) => (
              <div
                key={i}
                className="relative shadow-xl shadow-black p-3
                  bg-white rounded-lg item w-64 h-64 object-contain
                  bg-[url('https://cdn.pixabay.com/photo/2022/02/18/16/09/ape-7020995_960_720.png')]
                  bg-no-repeat bg-cover overflow-hidden mr-2 mb-2 cursor-pointer
                  transition-all duration-75 delay-100 hover:scale-75"
              >
                <div
                  className="absolute bottom-0 left-0 right-0
                  flex flex-row justify-between items-center
                  label-gradient p-2 w-full text-white text-sm"
                >
                  <p>{i + 1}# Purple Bear</p>
                  <div className="flex justify-center items-center space-x-2">
                    <img
                      className="w-5 cursor-pointer"
                      src={ethlogo}
                      alt="Adulam Logo"
                    />
                    0.15
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className='flex flex-row justify-center items-center mx-auto mt-4'>
        <button
          className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f] p-2
            rounded-full cursor-pointer my-4"
        >
          Load more
        </button>
        </div>
      </div>
    </div>
  )
}

export default Artworks
