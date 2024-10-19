import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-primaryBlue pt-24 pb-16 lg:pt-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full mr-12 lg:w-1/4">
            <h1 className=" text-2xl font-bold text-bgColor"> HR Solutions</h1>
            <p className=" text-bgColor mt-4">
              The best human resource platform in the world
            </p>
            <div>
              <ul className="flex space-x-6 mt-10">
                <li>
                  <a href="#" >
                    <FaFacebook
                      color="white"
                      className="text-4xl lg:text-base"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" >
                    <FaTwitter
                      color="white"
                      className="text-4xl lg:text-base"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" >
                    <FaInstagram
                      color="white"
                      className="text-4xl lg:text-base"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <nav className="flex flex-col lg:flex-row justify-between flex-1 w-2/4 mr-12">
            <div className="mt-6 lg:mt-0">
              <h3 className=" text-bgColor font-bold">Company</h3>
              <ul className="space-y-8 mt-8">
                <li className=" text-bgColor">
                  <Link href="#">About Us</Link>
                </li>

                <li className=" text-bgColor">
                  <Link href="#">Terms of Service</Link>
                </li>
                <li className=" text-bgColor">
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li className=" text-bgColor">
                  <Link href="#">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="mt-6 w-full lg:mt-0 lg:w-1/4">
            <h3 className=" text-bgColor font-semibold">Newsletter</h3>
            <p className=" text-bgColor mt-8">
              Subscribe and get the latest updates
            </p>
            <form className="flex mt-4">
              <input
                className="bg-white py-4 px-4 rounded-lg text-sm flex-1 mr-4 lg:mr-0"
                type="text"
                placeholder="Enter your email"
              />
              <button
                className=" bg-white text-primaryBlue rounded-lg p-2 mx-3"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="mt-16">
          <span class="block text-sm text-center  text-bgColor">
            © 2024 HR Solutions. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

