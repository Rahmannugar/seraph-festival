import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EventList = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full px-5 sm:px-7 mt-16 lg:flex items-center justify-center lg:space-x-10">
      <div id="leftBox" className="lg:w-1/2  box-border">
        <div
          id="content"
          data-aos="fade-right"
          data-aos-duration="1300"
          className="px-5 py-5 lg:py-40 duration-500 bg-black text-white hover:bg-purple-600 hover:text-white"
        >
          <h1 className="md:text-3xl lg:text-5xl text-xl uppercase font-black py-3 lg:mt-[-100px]">
            Seraph Christian Festival: A Celebration of Faith and Community.
          </h1>
          <p className="text-sm mt-10">
            Join us for a spiritually enriching experience at the Seraph
            Christian Festival! This event is a celebration of faith and
            community, bringing together individuals from all walks of life to
            unite in worship, fellowship, and joy. Immerse yourself in inspiring
            worship sessions, engaging speakers, uplifting music, and activities
            that strengthen your faith and connect you with like-minded
            believers. Whether you're seeking spiritual growth, looking to
            connect with fellow Christians, or simply yearning for a day of
            faith-filled celebration, the Seraph Christian Festival is the place
            to be. Come, be a part of this transformative event and let your
            faith soar with the seraphic spirit!
          </p>
        </div>
      </div>

      <div className="lg:w-1/2 lg:relative lg:h-full mt-5" id="events">
        <ul>
          <li
            className="mb-5 lg:flex lg:space-x-3"
            data-aos="fade-left"
            data-aos-duration="1300"
          >
            <div id="date" className="mb-3 text-center">
              <h2 className="hover:bg-black duration-500 lg:px-6 lg:py-12 py-3 text-white text-xl font-black bg-purple-600">
                16th October 2024
              </h2>
            </div>
            <div
              id="details"
              className="border hover:bg-black hover:text-white duration-500 border-black px-5"
            >
              <h2 className="font-bold mt-3 mb-2">
                Visitation to the motherless homes.
              </h2>
              <p className="text-xs mb-3">
                Our event aims to bring joy to orphaned children in our
                community through a day of fun activities, gifts, and emotional
                support. We will provide a memorable experience for them while
                raising awareness about the needs of orphanage homes. The event
                encourages volunteerism and community engagement.
              </p>
              <div className="flex items-center justify-center"></div>
            </div>
          </li>

          <li
            className="mb-5 lg:flex lg:space-x-3"
            data-aos="fade-right"
            data-aos-duration="1300"
          >
            <div id="date" className="mb-3 text-center">
              <h2 className="hover:bg-black duration-500 text-white lg:px-6 lg:py-12 py-3 text-xl font-black bg-purple-600">
                25th October 2024
              </h2>
            </div>
            <div
              id="details"
              className="border hover:bg-black hover:text-white duration-500 border-black px-5"
            >
              <h2 className="font-bold mt-3 mb-2">
                Visitation to the Kirikiri Prison.
              </h2>
              <p className="text-xs mb-3">
                Embark on a compassionate journey with us as we plan a
                visitation to Kirikiri prison! This event represents an
                opportunity to extend a helping hand to those who are
                incarcerated, providing support, empathy, and a sense of hope.
                Through meaningful interactions, motivational talks, and acts of
                kindness, we aim to bring a glimmer of positivity to the lives
                of the inmates. Join us in fostering a sense of rehabilitation,
                second chances, and community reintegration, as we strive to
                make a difference in the lives of those within Kirikiri prison.
              </p>
              <div className="flex items-center justify-center"></div>
            </div>
          </li>

          <li
            className="mb-5 lg:flex lg:space-x-3"
            data-aos="fade-left"
            data-aos-duration="1300"
          >
            <div id="date" className="mb-3 text-center">
              <h2 className="hover:bg-black duration-500 lg:px-4 lg:py-12 py-3 text-white text-xl font-black bg-purple-600">
                9th November 2024
              </h2>
            </div>
            <div
              id="details"
              className="border hover:bg-black hover:text-white duration-500 border-black px-5"
            >
              <h2 className="font-bold mt-3 mb-2">Free Medical.</h2>
              <p className="text-xs mb-3">
                Join us for a day of wellness and care at our Free Medical
                Checkup Event! We believe that everyone deserves access to
                quality healthcare, and this event is designed to provide just
                that. Our team of dedicated healthcare professionals will offer
                a range of medical services, from general checkups to
                specialized screenings, all completely free of charge. Whether
                you're seeking a routine health assessment or have specific
                concerns, our event aims to promote preventive care and early
                detection while fostering a healthier community.
              </p>
              <div className="flex items-center justify-center"></div>
            </div>
          </li>

          <li
            className="mb-5 lg:flex lg:space-x-3"
            data-aos="fade-right"
            data-aos-duration="1300"
          >
            <div id="date" className="mb-3 text-center">
              <h2 className="hover:bg-black duration-500 lg:px-4 lg:py-12 py-3 text-white  text-xl font-black bg-purple-600">
                10th November 2024
              </h2>
            </div>
            <div
              id="details"
              className="border hover:bg-black hover:text-white duration-500 border-black px-5"
            >
              <h2 className="font-bold mt-3 mb-2">Seraph Festival: 2024.</h2>
              <p className="text-xs mb-3">
                Get ready for an unforgettable experience at Seraph Festival
                2024! Join us for a celebration of faith, community, and
                inspiration. This year promises a lineup of powerful speakers,
                uplifting music, and engaging activities that will strengthen
                your spiritual journey. Come together with fellow believers to
                worship, connect, and celebrate the seraphic spirit within us
                all. Mark your calendars and be part of an enriching and
                joy-filled event that will leave you spiritually refreshed and
                uplifted. See you at Seraph Festival 2024 – where faith comes to
                life!
              </p>
              <div className="flex items-center justify-center"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EventList;
