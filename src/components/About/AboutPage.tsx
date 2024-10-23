import NewsLetter from "../shared/NewsLetter";

const AboutPage = () => {

  return (
    <>
      {/* About Evently */}
      <section className="px-4 py-8">
        <h1 className="text-3xl lg:text-5xl font-semibold text-center py-2 text-[#FA776C] mb-12">
          About Evently
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-start">
          <div className="w-full lg:w-1/2">
            <img
              src="/images/event.png"
              alt="Event Image"
              className="rounded-tl-[40px] rounded-br-[40px] w-full h-auto"
            />
          </div>
          <div className="text-center lg:text-left px-5 lg:px-8 max-w-full lg:max-w-[50%]">
            <h2 className="text-[#624CF5] text-2xl lg:text-3xl font-medium">
              Welcome To Evently
            </h2>
            <h3 className="text-[#1C1C1C] font-medium text-xl lg:text-2xl leading-10 my-4">
              Turning dreams into Extraordinary Events.
            </h3>
            <p className="text-[#1C1C1C] font-light text-base lg:text-lg leading-7 lg:leading-8 text-justify">
              At Evently, we believe that every event tells a story—your story.
              Whether you’re celebrating a milestone, launching a product, or
              hosting a corporate gala, our mission is to bring your vision to
              life with creativity, precision, and a touch of magic. From
              intimate gatherings to large-scale celebrations, we handle every
              detail with care, ensuring that your event is not only successful
              but truly memorable.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Evently */}
      <section className="bg-[#EDEFFF] w-full py-10 lg:py-16 px-4 lg:px-24">
        <h1 className="text-[#624CF5] text-xl lg:text-2xl font-semibold leading-8 mb-6 text-center lg:text-left">
          What is Evently?
        </h1>
        <div className="text-[#1C1C1C] text-base lg:text-lg font-normal text-justify flex flex-col gap-6 leading-7 lg:leading-8">
          <p>
            Evently is more than just an event management company; we are
            creators of experiences that leave lasting impressions. Founded on
            the principles of innovation, dedication, and excellence, Evently
            has quickly become a trusted name in the industry. Our team of
            seasoned professionals brings together expertise from various
            fields, including event planning, design, logistics, and
            entertainment, to deliver a seamless and stress-free experience for
            our clients.
          </p>
          <p>
            We pride ourselves on our ability to take your ideas and transform
            them into reality. Whether you have a clear vision or just the
            beginning of an idea, we work closely with you to design and execute
            an event that reflects your personality, brand, and goals. Our
            holistic approach ensures that every element, from venue selection
            to vendor coordination, is perfectly orchestrated, allowing you to
            relax and enjoy the moment.
          </p>
        </div>
      </section>

      {/* Our Vision */}
      <section className="flex flex-col lg:flex-row gap-5 justify-between py-8 px-4 lg:px-20 mt-16">
        <div className="flex-1">
          <div className="flex items-center gap-4 justify-center lg:justify-start mb-4">
            <div className="bg-[#624CF5] w-1 h-8"></div>
            <h1 className="text-[#624CF5] text-xl lg:text-2xl font-semibold">
              Our Vision
            </h1>
          </div>
          <p className="text-[#1C1C1C] text-base lg:text-lg font-normal text-justify max-w-full lg:max-w-[600px] mt-4 leading-7 lg:leading-8">
            Our vision is to be the leading event management company known for
            our innovative approach, exceptional service, and ability to create
            meaningful experiences. We aspire to set new standards in the
            industry, where every event we manage is a benchmark for excellence
            and creativity. At Evently, we envision a world where events are not
            just gatherings but transformative experiences that bring people
            together, celebrate milestones, and create lasting memories.
          </p>
        </div>
        <div className="w-full lg:w-[45%] mt-6 lg:mt-0">
          <img
            src="/images/event2.png"
            alt="Event Image"
            className="rounded-tl-[40px] rounded-br-[40px] w-full h-auto"
          />
        </div>
      </section>

      {/* Our History */}
      <section className="mt-16 py-8 px-4 lg:px-24">
        <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
          <div className="bg-[#624CF5] w-1 h-8"></div>
          <h1 className="text-[#624CF5] text-xl lg:text-2xl font-semibold">
            Our History
          </h1>
        </div>
        <div className="text-[#1C1C1C] text-base lg:text-lg font-normal text-justify flex flex-col gap-6 leading-7 lg:leading-8">
          <p>
            Evently was born out of a deep passion for creating memorable
            experiences. Founded by a team of event enthusiasts with diverse
            backgrounds in event planning, hospitality, and design, Evently
            began as a small boutique agency focused on delivering personalized
            service to a select group of clients. Our founders, who each brought
            years of industry experience to the table, shared a common vision:
            to redefine what it means to create an event by focusing on the
            details that matter most.
          </p>
          <p>
            From our humble beginnings, we quickly gained a reputation for our
            creativity, reliability, and dedication to our clients. Word of
            mouth spread, and Evently began to grow, taking on larger projects
            and expanding our team of talented professionals. Despite our
            growth, we have remained true to our core values of personalized
            service and attention to detail. Every event, no matter how big or
            small, is treated with the same level of care and commitment.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <NewsLetter darkMode={false} />
    </>
  );
};

export default AboutPage;
