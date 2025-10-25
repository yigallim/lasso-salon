import React from "react";

const Location = () => {
  return (
    <section className="section-container">
      <div
        className="md:-ml-[0.1em] -mb-[0.3em] sm:-mb-[0.25em] text-[27vi] sm:text-[160px] md:text-[200px] lg:text-[240px] xl:text-[280px] 
              leading-[0.75] lg:tracking-widest font-bold font-bg text-[#F5F5F5]"
      >
        PLACE
      </div>
      <h2 className="text-[6vi] sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-[1.5em] sm:mb-[2em] leading-none">
        LOCATION
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.6485050735164!2d101.64300039999999!3d3.1867877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc34f253031b8d%3A0x1f750eb280b332e3!2sL%20A%20S%20S%20O%20SALON!5e0!3m2!1sen!2smy!4v1761132900965!5m2!1sen!2smy"
        className="w-full min-h-[500px] md:min-h-[600px]"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Location;
