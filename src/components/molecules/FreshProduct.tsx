import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import image1 from 'src/assets/images/boom.png';
import image2 from 'src/assets/images/dark_800.png';
import image3 from 'src/assets/images/signup.png';
import image4 from 'src/assets/images/error-page.svg';
// import image5 from 'src/assets/images/not-found.svg';

import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react';

import Autoplay from 'embla-carousel-autoplay';

const images: string[] = [image1, image2, image3, image4];

const imageByIndex = (index: number): string => images[index % images.length];

const DotButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      type='button'
      {...restProps}
    >
      {children}
    </button>
  );
};

const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className='embla__button embla__button--prev'
      type='button'
      {...restProps}
    >
      <svg
        className='embla__button__svg'
        viewBox='0 0 532 532'
      >
        <path
          fill='currentColor'
          d='M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z'
        />
      </svg>
      {children}
    </button>
  );
};

const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className='embla__button embla__button--next'
      type='button'
      {...restProps}
    >
      <svg
        className='embla__button__svg'
        viewBox='0 0 532 532'
      >
        <path
          fill='currentColor'
          d='M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z'
        />
      </svg>
      {children}
    </button>
  );
};

const FreshProduct = ({ product }: any) => {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const slides = SLIDES;
  const options = OPTIONS;
  // const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  const items = product
    .filter((prod: any) => prod.slug.includes('fresh product'))
    .map((prod: any) => (
      <Link
        to={`/product/${prod.id}`}
        key={prod.id}
        className='flex flex-col relative gap-[0.4rem] mb-3 hover:cursor-pointer hover:shadow-lg rounded-sm px-4 pb-4 pt-0 transition-all'
      >
        <img
          src={prod.images[0]}
          alt={prod.title}
          className='w-[100%] img'
        />
        <p className='text-center text-[20px] bg-white self-start'>
          {prod.title}
        </p>
        <p className='text-center text-[14px] bg-white self-start'>
          &#8358;{` ${prod.price}`}
          <span className='text-slate-500 opacity-40 pl-4'>
            {prod.slashedPrice}
          </span>
        </p>
      </Link>
    ));

  return (
    // <div className='bg-white  gap-3 items-center justify-center p-4 shadow-md rounded-md md:px-[1rem]'>
    //   <div className='flex gap-6 items-center mb-4'>
    //     <span className='block w-6 rounded-sm h-12 bg-green-500'></span>
    //     <span className='block text-green-500'>Fresh products</span>
    //   </div>

    //   <Slider {...settings}>
    //     <div>
    //       <h3>1</h3>
    //     </div>
    //     <div>
    //       <h3>2</h3>
    //     </div>
    //     <div>
    //       <h3>3</h3>
    //     </div>
    //     <div>
    //       <h3>4</h3>
    //     </div>
    //     <div>
    //       <h3>5</h3>
    //     </div>
    //     <div>
    //       <h3>6</h3>
    //     </div>
    //   </Slider>

    //   {/* <div className='grid grid-cols-product-grid gap-[10px]'>
    //     <AliceCarousel
    //       mouseTracking
    //       items={items}
    //       responsive={responsive}
    //       controlsStrategy='alternate'
    //       disableDotsControls={true}
    //     />
    //   </div> */}
    // </div>
    <>
      <div className='embla'>
        <div
          className='embla__viewport'
          ref={emblaRef}
        >
          <div className='embla__container'>
            {slides.map((index) => (
              <Link
                to={'/'}
                className='embla__slide'
                key={index}
              >
                <div className='embla__slide__number'>
                  <span>{index + 1}</span>
                </div>
                <img
                  className='embla__slide__img'
                  src={imageByIndex(index)}
                  alt='Your alt text'
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className='embla__dots'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
    </>
  );
};

export default FreshProduct;
