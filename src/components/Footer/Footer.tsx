import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className='contactCard'>
        <div className='text'>
          <h1>Let’s talk about your project</h1>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <button>GET IN TOUCH</button>
      </div>
      <div className='container'>
        <div className='logo-link'>
          <Image
            src='/assets/shared/desktop/logo-light.png'
            alt='DESIGNO'
            width={202}
            height={27}></Image>
          <hr></hr>
          <Link href={"/about-us"}>
            <p>OUR COMPANY</p>
          </Link>
          <Link href={"/locations"}>
            <p>LOCATIONS</p>
          </Link>
          <Link href={"/contact"}>
            <p>CONTACT</p>
          </Link>
        </div>
        <div className='contact'>
          <p>
            <b>Designo Central Office</b>
            <br></br>
            3886 Wellington Street
            <br></br>
            Toronto, Ontario M9C 3J5
          </p>
          <p>
            <b>Contact Us (Central Office)</b>
            <br></br>P : +1 253-863-8967
            <br></br>M : contact@designo.co
          </p>
          <div className='socialLink'>
            <Image
              src='/assets/shared/desktop/icon-facebook.svg'
              alt='follow in facebook'
              width={24}
              height={24}></Image>
            <Image
              src='/assets/shared/desktop/icon-youtube.svg'
              alt='follow in youtube'
              width={24}
              height={24}></Image>
            <Image
              src='/assets/shared/desktop/icon-twitter.svg'
              alt='follow in twitter'
              width={24}
              height={24}></Image>
            <Image
              src='/assets/shared/desktop/icon-pinterest.svg'
              alt='follow in pinterest'
              width={24}
              height={24}></Image>
            <Image
              src='/assets/shared/desktop/icon-instagram.svg'
              alt='follow in instagram'
              width={24}
              height={24}></Image>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
