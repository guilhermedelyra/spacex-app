/* eslint-disable no-unused-vars */
import '@fontsource/orbitron';
import React, {useEffect, useState} from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  Center,
  Text,
  Flex,
  Spacer,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import {ColorModeSwitcher} from './ColorModeSwitcher';
import axios from 'axios';
import ImageSlider from './components/organisms/ImageSlider';
import Card from './components/organisms/Card';
// import {SliderData} from './components/__mocked_data__/SliderData';
import theme from './theme';
import {baseUrl} from './utils.js';

function App() {
  const [nextLaunches, setNextLaunches] = useState([]);
  const [pastLaunches, setPastLaunches] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/launches/upcoming`).then(res => {
      setNextLaunches(res.data);
    });

    axios({
      method: 'GET',
      url: `${baseUrl}/launches/past`,
      timeout: 9000,
    }).then(res => {
      // eslint-disable-next-line no-console
      console.log(res.data);
      setPastLaunches(res.data);
    });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" p={5}>
        <Flex alignItems="top" justifyContent="center">
          <Spacer />
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="7xl"
            fontWeight="extrabold"
            fontFamily={'title'}
            justifySelf="center"
          >
            SPACEX LAUNCHES
          </Text>
          <Spacer />
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>

        <ImageSlider slides={nextLaunches} />

        <Divider
          orientation="horizontal"
          variant="dashed"
          bg={useColorModeValue('gray.800', 'whiteAlpha.900')}
          my={0}
        />

        <Text fontSize="7xl" fontFamily={'title'} justifySelf="center">
          past launches
        </Text>
        <Center mt={'5rem'}>
          <Grid templateColumns="repeat(2, 1fr)" w="83.5%">
            {pastLaunches.map(launch => (
              <Card
                key={launch.id}
                item={launch}
                baseDirection="column"
                imageMaxHeight={'40vh'}
              />
            ))}
          </Grid>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
