import React, { useEffect } from "react";

// Font awesome package
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// Components
import SocialIcon from "Atoms/SocialIcon/SocialIcon";
import FooterText from "Atoms/FooterText/FooterText";
import FooterTitle from "Atoms/FooterTitle/FooterTitle";
import FooterTextSection from "Molecules/FooterTextSection/FooterTextSection";

// Hooks
import useGetTime from "Hooks/useGetTime";
import useGetDate from "Hooks/useGetDate";

// Library for font awesome
library.add(faFacebookF, faTwitter, faInstagram);

const Footer = () => {
  const [date, setCurrDate, getDate] = useGetDate(new Date());
  const [currTime, setCurrTime, getTime] = useGetTime(new Date());

  // Interval for current date and time
  useEffect(() => {
    const timer = setInterval(() => {
      const currDate = new Date();
      setCurrDate(getDate(currDate));
      setCurrTime(getTime(currDate));
    }, 60000);
    // Clear interval when component unmount
    return () => {
      clearInterval(timer);
    };
  }, []); // eslint-disable-line

  return (
    <div className="bg-blue-500 h-2/7 justify-between flex flex-row gap-10 p-12 lg:flex-row">
      <div className="w-4/5 flex flex-col gap-10 lg:flex-row lg:justify-center lg:w-3/5">
        <FooterTextSection>
          <FooterTitle>About me</FooterTitle>
          <FooterText>
            My name is Cyprian, I am 21 years old, and I want to become software
            developer by learning from much better than me!
          </FooterText>
        </FooterTextSection>

        <FooterTextSection>
          <FooterTitle>Current time</FooterTitle>
          <FooterText>{date}</FooterText>
          <FooterText>{currTime}</FooterText>
        </FooterTextSection>

        <FooterTextSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterText>(+48) 725 467 778</FooterText>
          <FooterText>veryyapeee@gmail.com</FooterText>
        </FooterTextSection>
      </div>
      <div className="flex flex-col gap-5 w-1/5 lg:justify-end lg:w-2/5 lg:flex-row text-right justify-start">
        <SocialIcon icon={["fab", "facebook-f"]} link="https://facebook.com" />
        <SocialIcon icon={["fab", "twitter"]} link="https://twitter.com" />
        <SocialIcon icon={["fab", "instagram"]} link="https://instagram.com" />
      </div>
    </div>
  );
};

export default Footer;
