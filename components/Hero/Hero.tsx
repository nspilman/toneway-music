import React from "react";
import { Box, Heading, Text, Button, Link } from "@chakra-ui/react";

export type Props = {
  title?: string;
  subtitle?: string;
  button?: {
    text: string;
    link: string;
  };
};

export const Hero = ({ title, subtitle, button }: Props) => {
  return (
    <Box
      backgroundImage={{
        base: "/LetItRideVertical.png",
        sm: "/LetItRideCover.png",
        md: `url(${"/LetItRideBannerCropped.png"})`,
      }}
      bgColor="background.primary"
      bgSize="contain"
      bgRepeat="no-repeat"
      bgPosition="center"
      minHeight="90vh"
      py={10}
      px={4}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      display="flex"
    >
      <Heading size="xl" color="white">
        {title}
      </Heading>
      <Text fontSize="xl" color="white">
        {subtitle}
      </Text>
      {button && (
        <Link href={button.link} isExternal>
          <Button
            backgroundColor="rgb(200,200,200, .5)"
            size="lg"
            variant="outline"
          >
            {button.text}
          </Button>
        </Link>
      )}
    </Box>
  );
};
