import React from 'react';

import { Footer, FooterSection, FooterLinkList, FooterDropDownSection } from 'react-mdl';

import twitter from '../../assets/images/social/twitter.svg';
import facebook from '../../assets/images/social/facebook.svg';
import instagram from '../../assets/images/social/instagram.svg';

export default () => (
  <Footer size="mega">
    <FooterSection type="middle">
        <FooterDropDownSection title="Features">
            <FooterLinkList>
                <a href="#">About</a>
                <a href="#">Terms</a>
                <a href="#">Partners</a>
                <a href="#">Updates</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="FAQ">
            <FooterLinkList>
                <a href="#">Questions</a>
                <a href="#">Answers</a>
                <a href="#">Contact Us</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Social">
            <FooterLinkList>
              <img src={twitter} role='presentation' />
              <img src={facebook} role='presentation' />
              <img src={instagram} role='presentation' />
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
    <FooterSection type="bottom" logo="Matungou">
      <FooterLinkList>
          <a href="#">Help</a>
          <a href="#">Privacy & Terms</a>
      </FooterLinkList>
    </FooterSection>
  </Footer>
);
