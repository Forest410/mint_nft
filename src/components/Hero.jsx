import ethlogo from '../assets/ethlogo.png'
const Hero = () => {
  return (
    <div
      className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')]
        bg-no-repeat bg-cover"
    >
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold text-center">
            A.I Arts <br />
            <span className="text-gradient">NFTs</span> Collection
          </h1>

          <p className="text-white font-semibold text-sm mt-3">
            Mint and collect the hottest NFTs around.
          </p>

          <button
            className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f] p-2
            rounded-full cursor-pointer my-4"
          >
            Mint Now
          </button>
        </div>

        <div className="flex flex-col justify-center items-center mx-auto pt-6">
          <h4 className="text-white text-xl font-bold text-center">
            Recently Minted
          </h4>
        </div>

        <div className="overflow-x-scroll no-scrollbar w-full my-4">
          <div className="flex flex-row justify-center items-center space-x-3">
            {Array(10)
              .fill()
              .map((item, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 shadow-xl shadow-black p-3
                  bg-white rounded-lg item w-64 h-64 object-contain
                  bg-[url('https://cdn.pixabay.com/photo/2022/02/18/16/09/ape-7020995_960_720.png')]
                  bg-no-repeat bg-cover overflow-hidden"
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
        </div>
      </div>
    </div>
  )
}

export default Hero
