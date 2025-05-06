import React from "react";
import { facebookIcon, tiktokIcon, instagramIcon, xIcon } from "../assets";

function Footer() {
  return (
    <div className="pt-8 padding-x max-container">
      <section className="flex flex-col justify-center items-center py-4 border-t-2 border-gray-400 text-center">
        <div className="flex gap-4 mb-2">
          <img src={facebookIcon} alt="Facebook Icon" width={30} height={30} />
          <img src={tiktokIcon} alt="Tiktok Icon" width={30} height={30} />
          <img
            src={instagramIcon}
            alt="Instagram Icon"
            width={30}
            height={30}
          />
          <img src={xIcon} alt="X Icon" width={30} height={30} />
        </div>
        <p>2023 - RM, All rights reserved</p>
      </section>
    </div>
  );
}

export default Footer;
