import '@fontsource/orbitron';
import React from 'react';
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
import ImageSlider from './components/organisms/ImageSlider';
import Card from './components/organisms/Card';
import {SliderData} from './components/__mocked_data__/SliderData';
import theme from './theme';

const [item1, item2, item3] = SliderData;

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" p={5}>
        {/* <Grid minH="100vh" p={3}> */}
        <Flex minWidth="max-content" alignItems="top" justifyContent="center">
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

        <ImageSlider slides={SliderData} />

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
            <Card item={item1} baseDirection="column" />
            <Card item={item2} baseDirection="column" />
            <Card item={item3} baseDirection="column" />
          </Grid>
        </Center>
        {/* </Grid> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
