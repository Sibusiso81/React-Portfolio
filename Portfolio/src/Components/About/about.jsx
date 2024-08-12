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
              An aspiring Human Resources practitioner who has in persuit of
              this status found himself again taking to task the opportunity to
              equipt himself with Web devlopment knowledge as it to some expent
              revelutionised the field and moulding that knowledge into an
              ability to build responsive web aplications with{" "}
              <span className="text-gray-400/90">
                invaluable functionalities and accesible user interfaces
              </span>{" "}
              using various technologies
              <br />
              <br />
              {/* Beyond academics and technology, I center my life around fitness, kindness, and striving to be the best version of myself. I believe in the power of resilience and determination, values that guide me in both my personal and professional endeavors. Whether collaborating with a team or working on individual projects, my goal is to make a positive difference for myself and those around me. Thank you for visiting my portfolio, and I look forward to connecting and sharing more about my work and passions. */}
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
