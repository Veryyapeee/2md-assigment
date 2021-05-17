import React from "react";

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
  const [date, setDate] = useGetDate(new Date());
  const [time, setTime] = useGetTime(new Date());

  setInterval(() => {
    const currDate = new Date();
    setDate(currDate);
    setTime(currDate);
  }, 60000);

  return (
    <div className="bg-blue-500 h-2/7 justify-between flex flex-row gap-10 p-12 lg:flex-row">
      <div className="w-6/7 flex flex-col gap-10 lg:flex-row lg:justify-center lg:w-3/5">
        <FooterTextSection>
          <FooterTitle>About me</FooterTitle>
          <FooterText>
            My name is Cyprian, I am 21 years old, and I want to become a
            software developer!
          </FooterText>
        </FooterTextSection>

        <FooterTextSection>
          <FooterTitle>Current time</FooterTitle>
          <FooterText>{date}</FooterText>
          <FooterText>{time}</FooterText>
        </FooterTextSection>

        <FooterTextSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterText>(+48) 725 467 778</FooterText>
          <FooterText>veryyapeee@gmail.com</FooterText>
        </FooterTextSection>
      </div>
      <div className="flex flex-col gap-5 w-1/7 lg:justify-end lg:w-2/5 lg:flex-row text-right justify-start">
        <SocialIcon icon={["fab", "facebook-f"]} link="https://facebook.com" />
        <SocialIcon icon={["fab", "twitter"]} link="https://twitter.com" />
        <SocialIcon icon={["fab", "instagram"]} link="https://instagram.com" />
      </div>
    </div>
  );
};

export default Footer;
