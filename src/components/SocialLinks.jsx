import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import linkedinIcon from "@iconify/icons-fa-brands/linkedin";

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { html_url } = useSelector(selectData);

  return (
    <StyledSocialLinks>
      <a
        href={html_url}
        aria-label="Check out my GitHub profile Spraggins Designs."
        className="link-icons"
      >
        <Icon icon="icomoon-free:github" />
      </a>
      <a
        href="https://www.linkedin.com/in/spragginsdesigns"
        aria-label="LinkedIn Profile"
        className="link-icons"
      >
        <Icon icon={linkedinIcon} />
      </a>
    </StyledSocialLinks>
  );
}
