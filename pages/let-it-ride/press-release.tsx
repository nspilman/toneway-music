import { Box, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../../components/Header";

const Home: NextPage = () => {
  const navigation = [{ link: "/", text: "" }];
  return (
    <Box backgroundColor="background.primary" minHeight="100vh">
      <Header title="Toneway" navigation={navigation} />
      <Box color="text.primary" p="8">
        <Heading size="lg" pb="2">
          {`Seattle's Own Toneway Ignites Upbeat Summer Vibes With Debut Single "Let It Ride" `}
        </Heading>
        <Text py="1">
          {`Surfacing from the vibrant pulse of Seattle's music scene, Toneway is
          thrilled to announce their debut single, "Let It Ride," releasing on
          July 4th, 2023.`}
        </Text>
        <Text py="1">
          {`Born in the heart of the Pacific Northwest, Toneway artfully blends
          catchy riffs, engaging vocals, and sleek production. Their music
          extends an invitation to good times, ensuring an enjoyable experience
          no matter the setting. With "Let It Ride", they convey a universal
          message of maintaining a positive outlook, serving up a musical
          reminder to take life as it comes and relish the journey.`}
        </Text>
        <Text py="1">
          {`Toneway, a dynamic duo comprised of Nate Spilman and Jon Soifer, is
          pleased to feature the rhythmic talents of esteemed drummer Lawrence
          Gann from the punk band Jonathon Millionaire on "Let It Ride". His
          performance adds an impressive intensity to the track. Toneway unites
          catchy riffs, robust vocals, and pristine production to craft their
          distinct, upbeat pop-rock sound. Their music emits an aura of
          positivity and fun times, encapsulating their ethos of not sweating
          the small stuff.`}
        </Text>
        <Text py="1">
          {`This debut marks the initial stride on Toneway's high-energy pop-rock
          expedition. Listeners should stay tuned for more infectious music that
          insists on being turned up loud and moved to.`}
        </Text>
        <Text py="1">
          {`For more information about Toneway, follow them on Instagram
          @tonewayband or visit their website at tonewaymusic.com. For media
          inquiries, please contact tonewaymusic@gmail.com. Dive into the
          journey with Toneway, and let the good times roll with "Let It Ride".`}
        </Text>
        <Heading size="md" py="2">
          Media Contact{" "}
        </Heading>
        <Text>Toneway Email: tonewaymusic@gmail.com</Text>
        <Text>Website: tonewaymusic.com</Text>
        <Text>Instagram: @tonewayband</Text>
      </Box>
    </Box>
  );
};

export default Home;
