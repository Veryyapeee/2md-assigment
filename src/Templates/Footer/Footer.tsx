import React, { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import SocialIcon from "Atoms/SocialIcon/SocialIcon";
import FooterText from "Atoms/FooterText/FooterText";
import FooterTitle from "Atoms/FooterTitle/FooterTitle";

library.add(faFacebookF, faTwitter, faInstagram);

const getDate = (date: Date): string => {
  let d = new Date(date),
    month = `${d.getMonth() + 1}`,
    day = `${d.getDate()}`,
    year = d.getFullYear();

  month = month.length < 2 ? `0${month}` : month;
  day = day.length < 2 ? `0${day}` : day;

  return [year, month, day].join("-");
};

const getTime = (date: Date): string => {
  return date.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const Footer = () => {
  const [date, setDate] = useState(getDate(new Date()));
  const [time, setTime] = useState(getTime(new Date()));

  setInterval(() => {
    const currDate = new Date();
    setDate(getDate(currDate));
    setTime(getTime(currDate));
  }, 60000);

  return (
    <div className="bg-blue-500 h-2/7 flex flex-row gap-10 p-12 lg:flex-row">
      <div className="w-4/5 flex flex-col gap-10 lg:flex-row lg:justify-center lg:w-3/5">
        <div className="flex flex-col w-1/3 justify-center">
          <FooterTitle>About me</FooterTitle>
          <FooterText>
            My name is Cyprian, I am 21 years old, and I want to become a
            software developer!
          </FooterText>
        </div>

        <div className="flex flex-col w-1/3">
          <FooterTitle>Current time</FooterTitle>
          <FooterText>{date}</FooterText>
          <FooterText>{time}</FooterText>
        </div>

        <div className="flex flex-col w-1/3">
          <FooterTitle>Contact</FooterTitle>
          <FooterText>(+48) 725 467 778</FooterText>
          <FooterText>veryyapeee@gmail.com</FooterText>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-1/5 lg:justify-end lg:w-2/5 lg:flex-row text-right">
        <SocialIcon icon={["fab", "facebook-f"]} link="https://facebook.com" />
        <SocialIcon icon={["fab", "twitter"]} link="https://twitter.com" />
        <SocialIcon icon={["fab", "instagram"]} link="https://instagram.com" />
      </div>
    </div>
  );
};

export default Footer;
