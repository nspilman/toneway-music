import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

const Home: NextPage = () => {
  const navigation = [{ link: "/", text: "" }];
  return (
    <Box backgroundColor="background.primary" minHeight="100vh">
      <Header title="Toneway" navigation={navigation} />
      <Hero
        button={{
          link: "https://distrokid.com/hyperfollow/toneway/let-it-ride",
          text: "Presave Now! Out July 4th",
        }}
      />
    </Box>
  );
};

export default Home;
