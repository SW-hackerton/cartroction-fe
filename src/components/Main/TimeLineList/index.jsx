import { TimeLine } from 'components';
import styled from 'styled-components';
import Slider from 'react-slick';
import prev from 'image/icon/prev.svg';
import next from 'image/icon/next.svg';
import * as S from './style';

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <img src={prev} alt="prev" />
  </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      'slick-next slick-arrow' +
      (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <img src={next} alt="prev" />
  </button>
);

export function TimeLineList() {
  const temp = [
    {
      registration_form_id: 1,
      user_id: 1,
      manger_name: 'hello',
      date: '2020-01-01',
      repair_list: {
        카테고리1: '설명1',
        카테고리2: '설명2',
        카테고리3: '설명3',
      },
      car_number: '1234바 8900',
      car_distance: '1234km',
      estimates_image_url: '~',
      car_image_url: '~',
    },
    {
      registration_form_id: 2,
      user_id: 1,
      manger_name: 'hello',
      date: '2020-01-02',
      repair_list: {
        카테고리1: '설명1',
        카테고리2: '설명2',
        카테고리3: '설명3',
      },
      car_number: '1234바 8900',
      car_distance: '1224km',
      estimates_image_url: '~',
      car_image_url: '~',
    },
    {
      registration_form_id: 3,
      user_id: 1,
      manger_name: 'hello',
      date: '2020-01-03',
      repair_list: {
        카테고리1: '설명1',
        카테고리2: '설명2',
        카테고리3: '설명3',
      },
      car_number: '1234바 8900',
      car_distance: '1224km',
      estimates_image_url: '~',
      car_image_url: '~',
    },
    {
      registration_form_id: 4,
      user_id: 1,
      manger_name: 'hello',
      date: '2020-01-04',
      repair_list: {
        카테고리1: '설명1',
        카테고리2: '설명2',
        카테고리3: '설명3',
      },
      car_number: '1234바 8900',
      car_distance: '1224km',
      estimates_image_url: '~',
      car_image_url: '~',
    },
    {
      registration_form_id: 5,
      user_id: 1,
      manger_name: 'hello',
      date: '2020-01-04',
      repair_list: {
        카테고리1: '설명1',
        카테고리2: '설명2',
        카테고리3: '설명3',
      },
      car_number: '1234바 8900',
      car_distance: '1224km',
      estimates_image_url: '~',
      car_image_url: '~',
    },
    {
      registration_form_id: 6,
      user_id: 1,
      manger_name: 'hello',
      date: '2020-01-04',
      repair_list: {
        카테고리1: '설명1',
        카테고리2: '설명2',
        카테고리3: '설명3',
      },
      car_number: '1234바 8900',
      car_distance: '1224km',
      estimates_image_url: '~',
      car_image_url: '~',
    },
    {
      registration_form_id: 7,
      user_id: 1,
      manger_name: 'hello',
      date: '2020-01-04',
      repair_list: {
        카테고리1: '설명1',
        카테고리2: '설명2',
        카테고리3: '설명3',
      },
      car_number: '1234바 8900',
      car_distance: '1224km',
      estimates_image_url: '~',
      car_image_url: '~',
    },
    {
      registration_form_id: 8,
      user_id: 1,
      manger_name: 'hello',
      date: '2020-01-04',
      repair_list: {
        카테고리1: '설명1',
        카테고리2: '설명2',
        카테고리3: '설명3',
      },
      car_number: '1234바 8900',
      car_distance: '1224km',
      estimates_image_url: '~',
      car_image_url: '~',
    },
    {
      registration_form_id: 9,
      user_id: 1,
      manger_name: 'hello',
      date: '2020-01-04',
      repair_list: {
        카테고리1: '설명1',
        카테고리2: '설명2',
        카테고리3: '설명3',
      },
      car_number: '1234바 8900',
      car_distance: '1224km',
      estimates_image_url: '~',
      car_image_url: '~',
    },
    {
      registration_form_id: 10,
      user_id: 1,
      manger_name: 'hello',
      date: '2020-01-04',
      repair_list: {
        카테고리1: '설명1',
        카테고리2: '설명2',
        카테고리3: '설명3',
      },
      car_number: '1234바 8900',
      car_distance: '1224km',
      estimates_image_url: '~',
      car_image_url: '~',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <S.Container>
      <Slider {...settings} dotsClass="test-css">
        {temp.map((data, idx) => (
          <TimeLine
            key={data.registration_form_id}
            data={data}
            length={temp.length}
            page={5}
            idx={idx + 1}
          />
        ))}
      </Slider>
      <S.CarYear>차 연대기</S.CarYear>
      <S.Resent>최신이력</S.Resent>
    </S.Container>
  );
}
