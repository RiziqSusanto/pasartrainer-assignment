import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 h-full xl:h-[50vh] flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto px-0 py-2 xl:px-4 xl:py-8 flex flex-col xl:flex-row items-center">
        <div className="w-1/2">
          <img
            src="/assets/image/hero-img.png"
            alt="Image"
            className="w-[22.5rem] h-[22.5rem]"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl text-black font-bold mb-4">
            Semua Pelatihan Web & Mobile Development
          </h2>
          <p className="text-gray-500 text-lg">
            Bangun situs web dan aplikasi terbaik untuk perusahaan Anda dengan
            memperoleh keterampilan teknis yang diperlukan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
