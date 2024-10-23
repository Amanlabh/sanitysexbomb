import React from "react";
import Container from "./Container";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-[#F5F5F3] mt-auto">
      <Container className="max-w-container mx-auto border-t-[1px] group">
        <p className="text-titleFont font-normal text-center flex flex-col md:flex-row items-center justify-center text-lightText duration-200 text-sm py-4">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0">
            <AiOutlineCopyright />
          </span>
          <span className="mt-2 md:mt-0">
            Copyright 2024 | sexbomb | All Rights Reserved |
           
          </span>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
