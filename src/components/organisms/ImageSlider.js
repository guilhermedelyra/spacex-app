import React, {useState} from 'react';
import {HStack, IconButton} from '@chakra-ui/react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import Card from './Card';

const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HStack w="full" mt={35} mb={145} justifyContent="center" alignItems="center">
      <IconButton
        aria-label="left-arrow"
        icon={<FaArrowAltCircleLeft />}
        onClick={prevSlide}
        size="lg"
        variant="ghost"
        isRound={true}
      />
      {slides.map((slide, index) => {
        if (index === current) {
          return <Card key={`${slide.name}-${index}`} item={slide} noOfLines={4} />;
        }
        return <></>;
      })}
      <IconButton
        aria-label="right-arrow"
        icon={<FaArrowAltCircleRight />}
        onClick={nextSlide}
        size="lg"
        variant="ghost"
        isRound={true}
      />
    </HStack>
  );
};

export default ImageSlider;
