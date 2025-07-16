import { Container, Text } from "@chakra-ui/react";
// import Image from "next/image";

export default function Home() {
  return (
    <Container fluid centerContent={true}>
      <Text textStyle="6xl" fontWeight="semibold">Style Genie</Text>
      <p>Get AI Powered Style Recommendations, personalized to your face and your vibes</p>
    </Container>
  );
}
