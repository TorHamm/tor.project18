"use client";
import { useEffect } from "react";
import { DataObject } from "../../../data/interfaces";
import { useRouter } from "next/navigation";
import data from "@/data/data.json";
import Image from "next/image";
import Link from "next/link";

export default function DesignType({
  params,
}: {
  params: { designType: string };
}) {
  const router = useRouter();
  const id = params.designType;
  const info = (data as DataObject)[id];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!info) {
    router.replace("/");
    return null;
  }

  return (
    <>
      <div className='hero designPageHero'>
        <div className='title'>
          <h1>{info.heroText.title}</h1>
          <p>{info.heroText.text}</p>
        </div>
      </div>
      <div className='container'>
        {info.work.map((company, index) => (
          <div className='company' key={index}>
            <Image
              src={company.imageUrls}
              alt=''
              width={327}
              height={320}></Image>
            <div className='text'>
              <h3>{company.name}</h3>
              <p>{company.description}</p>
            </div>
          </div>
        ))}
        <div className='projectLink'>
          {Object.keys(data).map(
            (type) =>
              type != id && (
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
              )
          )}
        </div>
      </div>
    </>
  );
}
