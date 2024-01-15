import React from "react";
import ContactUs from "./ContactUs";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center  "style={{backgroundColor:'#CFFFE5'}}>
      {/* <ContactUs /> */}

      <h1 className="text-xl py-2 md:text-2xl font-semibold md:font-bold">
        Made by Kishan
      </h1>

      <hr className="w-[90%]  p-0  md:border-2 border-gray-900" />
      <div className="flex flex-col py-3 md:px-5 items-center md:flex-row justify-between w-full">
        
        <div className="">
          <p className="">
            ©️ 2023 <span className="text-lg font-semibold">movvify.</span>{" "}
            Movie Recommendation App,India. <br className="  md:hidden" />  All
            Rights Reserved
          </p>
          <p> PRIVACY POLICY TERMS AND CONDITIONS </p>
        </div>
        <div>
          <h1 className="text-xl ml-[15%] md:ml-[25%] md:font-semibold">
            Contact Me
          </h1>
          <div className="flex pt-2 ">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 md:mx-3 hover:opacity-75 hover:scale-[120%] transition "
            >
              <Github className="w-4 h-4 md:w-6 md:h-6" strokeWidth={1.75} />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 md:mx-3 hover:opacity-75 hover:scale-[120%] transition"
            >
              <Linkedin className="w-4 h-4 md:w-6 md:h-6" strokeWidth={1.75} />
            </a>
            <a
              href="tel:+91 7054073183"
              className="mx-2 md:mx-3 hover:opacity-75 hover:scale-[120%] transition"
            >
              <Phone className="w-4 h-4 md:w-6 md:h-6" strokeWidth={1.75} />
            </a>
            <a
              href="mailto:kishankumarseth.ggu@gmail.com"
              className="mx-2 md:mx-3 hover:opacity-75 hover:scale-[120%] transition"
            >
              <Mail className="w-4 h-4 md:w-6 md:h-6" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div>
  <h1>Contact Me</h1>
  <div className='flex '>
  <Github size={32} color="#000000" strokeWidth={1.75} absoluteStrokeWidth className='cursor-pointer hover:scale-[120%] '/>
  <Linkedin size={32} color="#000000" strokeWidth={1.75} absoluteStrokeWidth className='cursor-pointer hover:scale-[120%] ' />
  <Phone size={32} color="#000000" strokeWidth={1.75} absoluteStrokeWidth className=' hover:scale-[120%] '  />
  </div>
</div> */
}
