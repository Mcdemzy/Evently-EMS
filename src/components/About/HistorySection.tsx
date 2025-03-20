// HistorySection.tsx
import React from "react";
import SectionTitle from "./SectionTitle";

const HistorySection: React.FC = () => {
  return (
    <section className="mt-16 py-8 px-4 lg:px-24">
      <SectionTitle title="Our History" />
      <div className="text-[#1C1C1C] text-base lg:text-lg font-normal text-justify flex flex-col gap-6 leading-7 lg:leading-8 dark:text-[#DFE1FF] mt-12">
        <p>
          Evently was born out of a shared vision among four friends—Adeniji
          Adeoluwa, Adeyemo Ademola, Omojola Zion, and Obua Stella—who met
          through their passion for technology, innovation, and seamless event
          planning.
        </p>
        <h3 className="font-semibold text-xl">How We Met</h3>
        <p>
          Each of us came from different backgrounds but shared a common
          frustration: organizing and managing events was often chaotic,
          expensive, and inefficient. Whether it was school events, business
          meetups, or social gatherings, we saw firsthand how existing event
          management solutions lacked the flexibility and ease that organizers
          and attendees needed.
          <li>
            Adeniji Adeoluwa, a UI/UX designer and tech enthusiast, had
            experience designing digital products that enhanced user experience.
          </li>
          <li>
            Adeyemo Ademola, a skilled developer, was passionate about building
            scalable and intuitive web platforms.
          </li>
          <li>
            Omojola Zion, with a strong background in marketing and branding,
            knew how to connect businesses with the right audience.
          </li>
          <li>
            Obua Stella, an event planning expert, had worked on multiple events
            and understood the pain points of both organizers and attendees.
          </li>
        </p>
        <h3 className="font-semibold text-xl">The Birth of Evently</h3>
        <p>
          During one of our late-night brainstorming sessions, we realized that
          event planning needed a smart, all-in-one platform that would make
          organizing, promoting, and attending events seamless. We envisioned a
          web-based solution where users could easily create, manage, and
          promote events, while attendees could find, register, and purchase
          tickets without hassle.
          <br /><br />
          With this idea in mind, we combined our
          expertise and started working on Evently—an intuitive event management
          and ticketing platform designed for students, businesses, and
          organizations.
          <br /><br />
          From countless discussions, wireframing sessions, and
          testing different prototypes, Evently evolved into a powerful solution
          for event creators and attendees alike. Today, it stands as a
          game-changing platform that simplifies event planning while ensuring a
          smooth experience for users.
        </p>
      </div>
    </section>
  );
};

export default HistorySection;
