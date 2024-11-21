import React from "react";

function About() {
  return (
    <section className="h-screen  lg:h-screen w-fit bg-neutral-950 flex flex-col justify-center">
      <div className="grid grid-cols-2 gap-12 md:gap-2  mt-4 p-2 ">
        <div className="col-span-2 md:col-span-1  text-white  ">
          <div className="flex flex-row   mt-2 p-1 md:p-6 md:justify-center items-center">
            <div className="grid grid-cols-3">
              <div
                className=" rounded-full overflow-hidden h-fit w-fit  
                 "
              >
                <img
                  className="rounded-lg h-11 w-11 "
                  src="https://media.licdn.com/dms/image/D4D03AQE2TyjKNsWxDg/profile-displayphoto-shrink_200_200/0/1723307992013?e=1729123200&v=beta&t=-fcOcNS-NxaLAiWb1mmJkmkSYhlyzOTYGEdTi1miuw0"
                  alt="profile-iimg"
                />
              </div>
              <div className="flex flex-col text-white text-md font-poppins  text-sm mx-auto  my-auto col-span-2 ">
                <p>Sibusiso Zulu</p>
                <p>
                  HRM Student & <br />
                  Frontend Developer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 text-white flex flex-col font-poppins lg:text-[16px] md:mt-6 pr-1 lg:pr-10 justif-center">
          <div className="justify-end items-end justofy-center p-2">
            <p>
            As an aspiring Human Resources practitioner, I have embraced the opportunity to equip myself with web development skills, recognizing the revolutionary impact of technology on the field. I am committed to harnessing this knowledge to build responsive web applications with invaluable functionalities and accessible user interfaces, utilizing a variety of modern technologies."

 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
