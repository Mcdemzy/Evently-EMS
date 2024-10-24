export default function Progress() {
  return (
    <>
      {/* progress bars */}
      <section className="my-6 w-[90%] m-auto  flex flex-col md:flex-row justify-between items-center">
        <div className="w-[30%] h-[101px] flex justify-center items-center gap-y-1 flex-col">
          <span className="w-[48px] h-[48px] rounded-full bg-[#25194D] text-white flex justify-center items-center">
            1
          </span>
          <p>DETAILS</p>
        </div>
        <div className="w-[30%] h-[101px] flex justify-center items-center gap-y-1 flex-col">
          <span className="w-[48px] h-[48px] rounded-full bg-[#25194D] text-white flex justify-center items-center">
            2
          </span>
          <p>TICKETS</p>
        </div>
        <div className="w-[30%] h-[101px] flex justify-center items-center gap-y-1 flex-col">
          <span className="w-[48px] h-[48px] rounded-full bg-[#25194D] text-white flex justify-center items-center">
            3
          </span>
          <p>APPEARANCE</p>
        </div>
      </section>
    </>
  );
}
