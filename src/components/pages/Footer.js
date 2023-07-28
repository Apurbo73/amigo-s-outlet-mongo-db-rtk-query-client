import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { BiMobileVibration } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="mt-5 pt-5">
      <div
        style={{ backgroundColor: " #232F3E", marginBottom: -16 }}
        className=" text-light "
      >
        <p className="pt-2 text-center p-2">
          &copy; 2023 Amigo's Outlet Limited Sylhet
        </p>
      </div>
      <div
        style={{ backgroundColor: " #131A22" }}
        className=" text-light p-5 row "
      >
        <div className="d-flex flex-wrap container pb-3">
          <div className="col-12 col-lg-2 col-md-2">
            <h6 className="mb-4">Learn About Us</h6>
            <p>Careerss</p>
            <p>Blog</p>
            <p>About Amigo's</p>
            <p>Investment</p>
            <p>Plans</p>
          </div>
          <div className="col-12 col-lg-2 col-md-2">
            <h6 className="mb-4">Make Money with Us</h6>
            <p>Sell products</p>
            <p>Amigo's Business</p>
            <p>Become an Affiliate</p>
            <p>Self-Publish with Us</p>
            <p>See More</p>
          </div>
          <div className="col-12 col-lg-2 col-md-2">
            <h6 className="mb-4">Payment Gateways</h6>
            <p>Master Card</p>
            <p>Bkash Payment</p>
            <p>Rocket Payment</p>
            <p>Nogod Payment</p>
            <p>Payoneer Transfer</p>
          </div>
          <div className="col-12 col-lg-2 col-md-2">
            <h6 className="mb-4">Let Us Help You</h6>
            <p>Your Account</p>
            <p>Your Orders</p>
            <p>Replacements</p>
            <p>Manage Content</p>
            <p>Help</p>
          </div>
          <div className="col-12 col-lg-2 col-md-2">
            <h6 className="mb-4">Support</h6>
            <p>FAQ</p>
            <p>How It Works</p>
            <p>Replacements</p>
            <p className="">
              <BsFacebook style={{marginRight:5}}  />
              <FaInstagram style={{marginRight:5}}  />
              <FiYoutube style={{marginRight:5}}  />
              <FiTwitter style={{marginRight:5}}  />
              <AiOutlineGithub style={{marginRight:5}}  />
            </p>
            <p>
              <BiMobileVibration />: 01774573076
            </p>
          </div>
          <div className="col-12 col-lg-2 col-md-2">
            <h6 className="mb-4">Policies</h6>
            <p>Refund Policy</p>
            <p>Payment Gateway</p>
            <p>Terms & Conditions</p>
            <p>Purchase & withdraw</p>
            <p>Order Place</p>
          </div>
        </div>
        <hr />
        <p className="text-center">Developed By : Apurbo Deb Nath</p>
      </div>
    </div>
  );
};

export default Footer;
