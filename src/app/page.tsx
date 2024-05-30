"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <div className='hero mainPageHero'>
        <div className='title'>
          <div className='text'>
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
          </div>
          <button onClick={() => router.push("/about-us")}>LEARN MORE</button>
        </div>
        <Image
          src={"/assets/home/desktop/image-hero-phone.png"}
          alt=''
          className='phoneImg-mainpage'
          width={624}
          height={943}
          priority={true}></Image>
      </div>
      <div className='container'>
        <div className='projectLink'>
          {Object.keys(data).map((type) => (
            <Link
              href='/designPage/[type]'
              as={`/designPage/${type}`}
              key={type}>
              <div className={`link ${type}`}>
                <div className='text'>
                  <h2>{`${type.toUpperCase()} DESGIN`}</h2>
                  <p>VIEW PROJECTS</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className='companyStrength'>
          <div className='section'>
            <Image
              src={"assets/home/desktop/illustration-passionate.svg"}
              alt=''
              width={202}
              height={202}></Image>
            <div className='text'>
              <h3>PASSIONATE</h3>
              <p>
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
          </div>
          <div className='section'>
            <Image
              src={"assets/home/desktop/illustration-resourceful.svg"}
              alt=''
              width={202}
              height={202}></Image>
            <div className='text'>
              <h3>RESOURCEFUL</h3>
              <p>
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </p>
            </div>
          </div>
          <div className='section'>
            <Image
              src={"assets/home/desktop/illustration-friendly.svg"}
              alt=''
              width={202}
              height={202}></Image>
            <div className='text'>
              <h3>FRIENDLY</h3>
              <p>
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
