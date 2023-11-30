import React, { useState } from "react";
import { ArrowUp, Down } from "../../assets/svgs/svg-icons";

const Process = () => {
  const [open, setOpen] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleOpen = (name) => {
    setOpen(name);
    setToggle(false);
  };

  const handleClose = () => {
    setOpen("");
    setToggle(true);
  };

  const stages = [
    {
      stage: "FARM",
      title: "The genesis of the Process",
      img: "https://villagemarkt.com/cdn/shop/files/Frame_169-min.jpg?v=1697536334&width=750",
      details:
        "Discover the finest sustainably farmed produce known for its exceptional quality",
    },
    {
      stage: "STORAGE",
      title: "Preservation of our products",
      img: "https://villagemarkt.com/cdn/shop/files/Frame_170-min.jpg?v=1697536336&width=750",
      details:
        "Vegetables and tubers that have been ethically sourced and meticulously handpicked",
    },
    {
      stage: "QUALITY",
      title: "Quality Assurance",
      img: "https://villagemarkt.com/cdn/shop/files/Frame_171-min.jpg?v=1697536336&width=750",
      details:
        "Ensuring the absence of genetically modified organisms and artificial preservatives, supports a healthy lifestyle and facilitates proper storage",
    },
    {
      stage: "SUPPLY",
      title: "Supplied to Our Stores",
      img: "https://villagemarkt.com/cdn/shop/files/Frame_172-min.jpg?v=1697536336&width=750",
      details:
        "Optimal techniques for efficient wholefoods delivery/pickip system",
    },
  ];
  return (
    <section className="py-[4rem] bg-primary md:px-[4rem] w-full">
      <hgroup className="flex flex-col items-center justify-center md:mb-[6rem] mb-[4rem]">
        <span className="block text-light-green mb-[1rem] md:text-[1.05rem] text-[.9rem]">
          WE ALWAYS HAVE YOU IN MIND
        </span>
        <h2 className="mb-[1.5rem] font-cooper md:text-[3.8vw] text-[1.5rem] font-bold text-dark-green">
          OUR PROCESS
        </h2>
      </hgroup>
      {/* special section */}
      <div className="desktop md:block hidden">
        <div className="cards-container flex items-center">
          {stages.map((stage) => (
            <div className="group w-[28%] h-[25rem] relative after:absolute after:top-[-12%] after:block after:bg-white after:border-carpet-green after:border-solid after:border-[6px] after:w-[1.5rem] after:h-[1.5rem] after:rounded-full">
              <div className="card_container flex flex-col items-start before:w-full before:h-[.25rem] before:block before:absolute before:top-[-9%] before:left-0 before:bg-carpet-green">
                <div className="card  h-full w-[91%]">
                  <span className="mb-[.5rem] process_btn font-cooper font-semibold bg-carpet-green rounded-full text-white w-[6rem] flex items-center justify-center">
                    {stage.stage}
                  </span>
                  <span className="text-black block font-semibold font-cooper text-[1.18rem]">
                    {stage.title}
                  </span>
                  <img
                    src={stage.img}
                    alt={stage.stage}
                    className="w-full h-[10rem] object-cover my-[1rem]"
                  />
                  <p className="text-dark-green">{stage.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mobile md:hidden block pl-[4rem] pr-[2rem] mx-auto">
        <div className="cards-container flex flex-col items-center justify-center">
          {stages.map((stage) => (
            <div className="group w-full relative after:absolute after:top-0 after:left-[-40px] after:block after:bg-white after:border-carpet-green after:border-solid after:border-[6px] after:w-[1.5rem] after:h-[1.5rem] after:rounded-full">
              <div className="card_container flex flex-col min-h-[6rem] items-center justify-start before:w-[.25rem] before:h-full before:block before:absolute before:left-[-30px] before:top-0 before:bg-carpet-green">
                <div className="card h-full w-full">
                  <div className="title_container">
                    <span className="mb-[.5rem] process_btn font-serif font-semibold bg-carpet-green rounded-full text-white w-[6rem] flex items-center justify-center">
                      {stage.stage}
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="block text-black font-semibold font-cooper md:text-[1.18rem] text-[1rem]">
                        {stage.title}
                      </span>

                      {open !== stage.stage ? (
                        <Down
                          onClick={() => handleOpen(stage.stage)}
                          className="cursor-pointer"
                        />
                      ) : (
                        <ArrowUp
                          onClick={handleClose}
                          className="cursor-pointer font-bold"
                        />
                      )}
                    </div>
                  </div>
                  <div
                    className={`container pb-[2rem] ${
                      open === stage.stage ? "block" : "hidden"
                    } h-full`}
                  >
                    <img
                      src={stage.img}
                      alt={stage.stage}
                      className="w-full h-[10rem] object-cover my-[1rem]"
                    />
                    <p className="text-dark-green">{stage.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
