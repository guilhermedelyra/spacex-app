import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Box,
  Stack,
  HStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {FaMapMarkerAlt} from 'react-icons/fa';

export default function UpcomingCard({
  item,
  descriptionNoOfLines = 0,
  headingNoOfLines = 1,
  imageMaxHeight = -1,
  baseDirection = ['column', 'row'],
}) {
  return (
    <Center py={6}>
      <Stack
        borderRadius="3xl"
        w="80%"
        direction={baseDirection}
        bgGradient={useColorModeValue(
          'linear(to-br, #CAC7E5, #EDE5F0)',
          'linear(to-r, #091420, #09171F)'
        )}
        boxShadow={`6px 6px 14px 0 rgba(0, 0, 0, 0.5),
          -8px -8px 18px 0 rgba(255, 255, 255, 0.05)`}
        padding={6}
      >
        <Flex flex={1.4} rounded="lg">
          <Image
            objectFit="cover"
            maxH={imageMaxHeight}
            boxSize="100%"
            rounded="lg"
            src={item.image}
          />
        </Flex>
        <Stack flex={1} justifyContent="space-between" pl={4} spacing={8}>
          <HStack alignItems="top" justifyContent="space-between">
            <Heading noOfLines={headingNoOfLines} fontSize={'5xl'} fontFamily={'heading'}>
              {item.title}
            </Heading>
            <Text
              fontWeight={600}
              color={useColorModeValue('yellow.600', 'yellow.400')}
              size="sm"
              mb={4}
            >
              <Badge
                ml="1"
                fontSize="0.8em"
                colorScheme={item.next ? 'green' : item.upcoming ? 'yellow' : 'red'}
              >
                {item.next ? 'Next Launch!' : item.upcoming ? 'Upcoming' : 'Past'}
              </Badge>
              {`  #${item.number}`}
            </Text>
          </HStack>

          <Center>
            <Box
              transform="skew(-10deg)"
              rounded="md"
              padding="2"
              border="3px solid"
              borderColor="pink.300"
              w="50%"
              alignItems="center"
              boxShadow={'2xl'}
              justifyContent="center"
            >
              <Text
                transform="skew(10deg)"
                textAlign={'center'}
                align="center"
                fontSize={'3xl'}
                fontFamily={'mono'}
              >
                {item.date}
              </Text>
            </Box>
          </Center>

          {descriptionNoOfLines && (
            <Text
              textAlign={'left'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}
              noOfLines={[1, descriptionNoOfLines]}
            >
              {item.description}
            </Text>
          )}
          <Stack align={'left'} justify={'left'} direction={'row'} mt={6}>
            <FaMapMarkerAlt />
            <Text
              textAlign={'left'}
              color={useColorModeValue('gray.900', 'gray.200')}
              px={3}
            >
              {item.location}
            </Text>
          </Stack>

          <Button
            w="full"
            h="8rem"
            fontSize={'2xl'}
            rounded={'lg'}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
          >
            Learn More
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
}
