import { Flex, Heading, Text, Link } from "@chakra-ui/react";
import { Navigation } from "./Navigation";
import { Navigation as NavType } from "../../types/navigation";

export interface Props {
  title: string;
  navigation: NavType[];
}
export const Header = ({ title, navigation }: Props) => {
  return (
    <Flex
      justifyContent="space-between"
      width="100%"
      bg="background.primary"
      color="text.primary"
      px="10"
      py="4"
      alignItems="center"
      position="relative"
    >
      <Heading size="md">
        <Link href="/">
          <Text casing="uppercase">{title}</Text>
        </Link>
      </Heading>
      <Navigation title={title} navigation={navigation} />
    </Flex>
  );
};
