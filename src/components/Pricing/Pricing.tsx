import Footer from "../shared/Footer"
import NewsLetter from "../shared/NewsLetter"

function Pricing() {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="w-full text-center mx-auto px-16 py-40">
        <h2 className="text-[#FA776C] text-7xl font-semibold mb-7">
          Coming Soon!!!
        </h2>
        <span className="text-6xl font-light">
          Anticipate our launch people...
        </span>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Pricing