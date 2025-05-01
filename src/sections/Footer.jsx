import React from "react";
import { facebookIcon, tiktokIcon, instagramIcon, xIcon } from "../assets";

function Footer() {
  return (
    <div className="pt-8">
      <section className="relative padding-x py-4 border-t-2 border-gray-400 text-center">
        <p>2023 - RM, All rights reserved</p>
        <div className="sm:flex hidden absolute right-2 top-3 gap-4">
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
      </section>
    </div>
  );
}

export default Footer;
