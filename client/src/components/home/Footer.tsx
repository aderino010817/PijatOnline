import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <Box bgColor="gray.700" color="white" p={10}>
      <Flex direction="column" alignItems="center" justify="center" mb={10}>
        <Text fontSize="3xl" fontWeight="bold" mb={2}>
          Pijat-Online
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Jasa Pijat Panggilan Terpercaya dan Profesional
        </Text>
      </Flex>
      <Flex
        justify="space-between"
        alignItems="center"
        flexDirection={"column"}
      >
        <Box w={["100%", "50%"]} mb={[5, 0]}>
          <Text fontSize="xl" fontWeight="bold">
            Pijat-Online INDONESIA
          </Text>
          <Text>
            Permata Bintaro Residence, Jl. Elang IV Kav.28, Rt.004/Rw.001 Sawah
            Lama, Ciputat, Tangerang Selatan Banten - 15413
          </Text>
        </Box>
        <Box
          w={["100%", "50%"]}
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}
          alignItems={"center"}
        >
          <Text fontWeight="bold" mb={2}>
            Sosial Media
          </Text>
          <Box display={"flex"} flexDirection={"row"}>
            <Flex gap={5}>
              <Button colorScheme="teal" variant="outline" size="lg">
                <FiInstagram size="20px" />
              </Button>
              <Button colorScheme="teal" variant="outline" size="lg">
                <FiFacebook size="20px" />
              </Button>
              <Button colorScheme="teal" variant="outline" size="lg">
                <BsWhatsapp size="20px" />
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
