import React from "react";
import Container from "./Container"; // Assuming you have a Container component for layout
import Image from "next/image";
import Link from "next/link";
import DrakeTshirtImage from "../assets/Drake_Oversized_Tshirt_Back.jpg"; // Import your image

const YearProduct = () => {
  return (
    <div className="w-full bg-[#f3f3f3] py-10">
      <Container className="md:bg-transparent relative mb-10 flex flex-col items-center">
        {/* Product Image Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 mb-10">
          {/* Image of the product */}
          <div className="w-full md:w-1/2">
            <Image
              src={DrakeTshirtImage} // Use the imported image here
              alt="Featured Product"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Offers and Product Info Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Limited Time Offer!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get exclusive deals on our best products! Save up to{" "}
              <span className="font-bold text-red-500">30% off</span> this season.
            </p>
            <ul className="list-disc ml-4 text-gray-700 mb-4">
              <li>Top quality product</li>
              <li>Fast shipping</li>
              <li>Limited stock available</li>
            </ul>
            <Link
              href={"/shop"}
              className="bg-primeColor text-white text-lg w-full md:w-[200px] h-[40px] hover:bg-black duration-300 font-bold flex items-center justify-center rounded-md mt-4"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="w-full border-gray-300 mb-6" />

        {/* Call to Action */}

      </Container>
    </div>
  );
};

export default YearProduct;
