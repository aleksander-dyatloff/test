import Header from "@/components/Header/Header";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import BackgroundImage from "./bg.png";

export async function generateMetadata() {
  const client = createClient();
  const page = await client
    .getByUID("landing_page", "homepage")
    .catch(() => null);

  if (!page) return {};

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title,
      description: page.data.meta_description,
    },
  };
}

async function Home() {
  const client = createClient();
  const page = await client
    .getByUID("landing_page", "homepage")
    .catch(() => null);

  const header = await client.getByType("header").catch(() => null);

  if (!page || !header) return notFound();

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <Image fill src={BackgroundImage.src} alt="bg image" />
      </div>
      <Header data={header.results[0]} />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export default Home;
