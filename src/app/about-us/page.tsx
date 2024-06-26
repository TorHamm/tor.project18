import Image from "next/image";

export default function AboutUsPage() {
  return (
    <>
      <div className='hero'>
        <Image
          src={"/assets/about/mobile/image-about-hero.jpg"}
          alt=''
          width={375}
          height={320}></Image>
        <div className='title'>
          <h1>About Us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </div>
      <div className='container aboutUsContainer'></div>
    </>
  );
}
