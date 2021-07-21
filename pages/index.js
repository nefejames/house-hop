import Head from "next/head";
import Card from "@components/Card";
import styled from "styled-components";

//until you find out how to get the supabase images and lnk them to each row, you can get the supabase data, map, and then spread the images into it for each row o data

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next && Styled Components </title>
      </Head>

      <Card />
    </div>
  );
}

// const data = [{ id: 1, img, imgAlt, title, specs, location, price }];

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, auto-fit));
  gap: 2rem;
`;

export async function getServerSideProps() {
  // const res = await fetch("https://api.pexels.com/v1/search?query=house", {
  //   headers: {
  //     Authorization: process.env.API_KEY,
  //   },
  // });

  return {
    props: {},
  };
}
