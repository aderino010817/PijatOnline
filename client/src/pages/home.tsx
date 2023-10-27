import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text
} from "@chakra-ui/react";
import {
  GoClock,
  GoCodeOfConduct,
  GoFileZip,
  GoGlobe,
  GoLocation,
  GoPerson,
} from "react-icons/go";
import pijat from "../assets/images/pijat.jpg";
import Footer from "../components/home/Footer";
import Layout from "../layouts/home/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Stack mt={"8vh"}>
          <Box
            display="flex"
            flexDirection={{
              base: "column",
              md: "column",
              lg: "row",
            }}
            padding={{
              base: "2em",
            }}
          >
            <Flex flexDirection={"column"} justify={"center"} w="100%" gap="5">
              <Text
                fontSize={{
                  base: "20px",
                  md: "24px",
                  lg: "35px",
                }}
                fontWeight={"bold"}
                lineHeight={1}
                color='teal.500'
              >
                Jasa Pijat Panggilan Terpercaya dan Profesional
              </Text>
              <Divider borderWidth="2px" borderColor={"teal"} w={"10vh"} />
              <Text color='teal.500'>
                Terlalu sibuk untuk pergi ke tukang pijat namun badan
                benar-benar butuh dipijat? Untuk masalah ini, solusinya adalah
                menggunakan jasa pijat panggilan. Pijat-Online.id menyediakan
                layananpijatyang bisa datang ke rumah Anda di manapun dan
                kapanpun juga selama 24 jam penuh.
              </Text>
            </Flex>
            <Box w="100%">
              <Image src={pijat} alt="massage" />
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            p={"1em"}
            bgColor={"teal.500"}
            color={"white"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              w={"100%"}
              gap={"1em"}
              mt={3}
            >
              <Text
                fontSize={{
                  base: "20px",
                  md: "24px",
                  lg: "25px",
                }}
                fontWeight={"bold"}
              >
                Layanan Pijat Online
              </Text>
              <Text textAlign="center">
                Relaksasi dan perawatan tubuh melalui sesi pijat-onlin yang
                mendatangkan tukang pijat yang berpengalaman melalui platform
                digital. Anda tidak perlu pergi ke pusat spa atau klinik pijat
                fisik karena Anda dapat mengaksesnya dari kenyamanan rumah Anda.
                Di layanan ini, Anda akan mendapatkan akses ke terapis pijat
                berlisensi yang memiliki keahlian dalam berbagai teknik pijat.
              </Text>
            </Box>
            <Box
              gap={{
                base: "1em",
                md: "1em",
              }}
              mt={"4em"}
              display={"flex"}
              flexDirection={{
                base: "column",
                md: "column",
                lg: "row",
              }}
            >
              <Box
                my="1em"
                p={"1em"}
                w={"100%"}
                bgColor={"teal.500"}
                boxShadow={"2px 2px 4px gray"}
                borderRadius={"13px"}
                color={"white"}
              >
                <Box>
                  <Heading size="md" textAlign="center">
                    Pijat Refleksi
                  </Heading>
                </Box>
                <Box mt={"1em"}>
                  <Text textAlign="center">
                    Teknik pijat yang fokus pada titik-titik tertentu di kaki,
                    tangan, dan telinga yang dipercayai terhubung dengan
                    berbagai bagian tubuh. Layanan ini memberikan pengalaman
                    relaksasi dan membantu meningkatkan sirkulasi darah serta
                    kesejahteraan fisik Anda.
                  </Text>
                </Box>
              </Box>
              <Box
                my="1em"
                p={"1em"}
                w={"100%"}
                boxShadow={"2px 2px 4px gray"}
                borderRadius={"13px"}
                bgColor={"gray.200"}
                color={"teal.500"}
                textShadow={"2px 2px 5px 2px gray"}
    
              >
                <Box>
                  <Heading size="md" textAlign="center">
                    Pijat Relaksasi
                  </Heading>
                </Box>
                <Box mt={5}>
                  <Text textAlign="center">
                    Cara sempurna untuk mengurangi stres dan ketegangan otot
                    setelah hari yang melelahkan. Layanan ini menawarkan
                    teknik-teknik pijat yang lembut dan menenangkan untuk
                    meredakan stres, meningkatkan relaksasi, dan memulihkan
                    energi Anda.
                  </Text>
                </Box>
              </Box>
              <Box
                my="1em"
                p={"1em"}
                w={"100%"}
                bgColor={"teal.500"}
                boxShadow={"2px 2px 4px gray"}
                borderRadius={"13px"}
                color={"white"}
              >
                <Box>
                  <Heading size="md" textAlign="center">
                    Pijat Kretek
                  </Heading>
                </Box>
                <Box mt={5}>
                  <Text textAlign="center">
                    Pendekatan perawatan kesehatan alternatif yang berfokus pada
                    sistem muskuloskeletal, terutama tulang belakang. Dalam sesi
                    chiropractic, seorang dokter chiropractic yang terlatih akan
                    melakukan penyesuaian tulang belakang dan sendi dengan
                    menggunakan tekanan lembut atau manipulasi.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            p={"1em"}
            bgColor={"white"}
            color={"teal.500"}
            textShadow={"2px 2px 5px 2px gray"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              w={"100%"}
              gap={"1em"}
              mt={3}
            >
              <Text
                fontSize={{
                  base: "20px",
                  md: "24px",
                  lg: "25px",
                }}
                fontWeight={"bold"}
              >
                Kelebihan Pijat Online{" "}
              </Text>
              <Text textAlign="center">
                Sebagai salah satu jasa pijat-online terbaik, Pijat-Online.id
                memiliki berbagai kelebihan dibandingkan dengan tempat lain.
                Kelebihan ini bisa Anda jadikan referensi dalam memilih jasa
                pijat untuk dipanggil ke rumah. Silahkan perhatikan dibawah ini.
              </Text>
            </Box>
            <Box
              gap={{
                base: "1em",
                md: "1em",
              }}
              mt={"4em"}
              display={"flex"}
              flexDirection={{
                base: "column",
                md: "column",
                lg: "row",
              }}
            >
              <Box
                my="1em"
                p={"1em"}
                w={"100%"}
                bgColor={"teal.500"}
                boxShadow={"2px 2px 4px gray"}
                borderRadius={"13px"}
                color={"white"}
              >
                <Box>
                  <Center display={"flex"} flexDirection={"column"}>
                    <GoGlobe size="50px" color="white" />
                    <Heading size="md" textAlign="center">
                      Jaringan Luas
                    </Heading>
                  </Center>
                </Box>
                <Box mt={"1em"}>
                  <Text textAlign="center">
                    Di manapun Anda berada, layanan Pijat-Online.id selalu
                    tersedia. Layanan kami meliputi kota-kota di Indonesia mulai
                    dari Sabang sampai Merauke
                  </Text>
                </Box>
              </Box>
              <Box
                my="1em"
                p={"1em"}
                w={"100%"}
                boxShadow={"2px 2px 4px gray"}
                borderRadius={"13px"}
                bgColor={"gray.200"}
                color={"teal.500"}
                textShadow={"2px 2px 5px 2px gray"}
    
              >
                <Box>
                  <Center display={"flex"} flexDirection={"column"}>
                    <GoClock size="50px" color="teal.400" />
                    <Heading size="md" textAlign="center">
                      Tersedia 24 Jam
                    </Heading>
                  </Center>
                </Box>
                <Box mt={5}>
                  <Text textAlign="center">
                    Waktu tidak menghalangi kami memberikan layanan terbaik.
                    Layanan pijat panggilan kami tersedia selama 24 jam penuh
                  </Text>
                </Box>
              </Box>
              <Box
                my="1em"
                p={"1em"}
                w={"100%"}
                bgColor={"teal.500"}
                boxShadow={"2px 2px 4px gray"}
                borderRadius={"13px"}
                color={"white"}
              >
                <Box>
                  <Center display={"flex"} flexDirection={"column"}>
                    <GoLocation size="50px" color="white" />
                    <Heading size="md" textAlign="center">
                      Bisa Melayani Dimana Saja
                    </Heading>
                  </Center>
                </Box>
                <Box mt={5}>
                  <Text textAlign="center">
                    Layanan pijat kami bisa melayani Anda di manapun berada.
                    Kami bisa dipanggil ke rumah, kontrakan, tempat kost, hotel,
                    wisma hingga penginapan dan sendi dengan menggunakan tekanan
                    lembut atau manipulasi.
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              gap={{
                base: "1em",
                md: "1em",
              }}
              mt={"4em"}
              display={"flex"}
              flexDirection={{
                base: "column",
                md: "column",
                lg: "row",
              }}
            >
              <Box
                my="1em"
                p={"1em"}
                w={"100%"}
                boxShadow={"2px 2px 4px gray"}
                borderRadius={"13px"}
                bgColor={"gray.200"}
                color={"teal.500"}
                textShadow={"2px 2px 5px 2px gray"}
    
              >
                <Box>
                  <Center display={"flex"} flexDirection={"column"}>
                    <GoPerson size="50px" color="teal" />
                    <Heading size="md" textAlign="center">
                      Terapis Profesional
                    </Heading>
                  </Center>
                </Box>
                <Box mt={"1em"}>
                  <Text textAlign="center">
                    Terapis kami adalah orang-orang yang berpengalaman dalam
                    bidang ini. Mereka telah dibekali pelatihan dan pendidikan
                    untuk skill pijat memijat. Semua terapis kami telah memegang
                    sertifikat lulus uji layanan pijat terbaik
                  </Text>
                </Box>
              </Box>
              <Box
                my="1em"
                p={"1em"}
                w={"100%"}
                bgColor={"teal.500"}
                boxShadow={"2px 2px 4px gray"}
                borderRadius={"13px"}
                color={"white"}
              >
                <Box>
                  <Center display={"flex"} flexDirection={"column"} gap={2}>
                    <GoFileZip size="50px" color="white" />
                    <Heading size="md" textAlign="center">
                      Menu Beragam
                    </Heading>
                  </Center>
                </Box>
                <Box mt={5}>
                  <Text textAlign="center">
                    Kami tidak hanya menyediakan satu atau dua menu pijat saja.
                    Di sini, kami menyediakan banyak teknik pijat yang ,br. bisa
                    Anda sesuaikan dengan keluhan atau kebutuhan saat ini
                  </Text>
                </Box>
              </Box>
              <Box
                my="1em"
                p={"1em"}
                w={"100%"}
                boxShadow={"2px 2px 4px gray"}
                borderRadius={"13px"}
                bgColor={"gray.200"}
                color={"teal.500"}
                textShadow={"2px 2px 5px 2px gray"}
    
              >
                <Box>
                  <Center display={"flex"} flexDirection={"column"}>
                    <GoCodeOfConduct size="50px" color="teal.500" />
                    <Heading size="md" textAlign="center">
                      Harga Murah dan Bersahabat
                    </Heading>
                  </Center>
                </Box>
                <Box mt={5}>
                  <Text textAlign="center">
                    Dimana lagi Anda bisa menemukan tempat pijat panggilan yang
                    tarifnya murah dan bersahabat selain di Go-Pijat. Kami
                    mematok tarif yang tidak jauh berbeda dengan jara pijat di
                    tempat pijat. Kami dijamin murah dan terjangkau
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            p="1em"
          >
          </Box>
          <Footer />
        </Stack>
      </Layout>
    </>
  );
}
