import { TimeLine } from 'components';
import { useOutletContext } from 'react-router-dom';
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
  const [data] = useOutletContext();

  const len = data.length;

  const slidesToShow = len < 5 ? len : 5;
  const slidesToScroll = len < 5 ? 1 : 5;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <S.Container>
      <Slider {...settings} dotsClass="test-css">
        {data.map((data, idx) => (
          <TimeLine
            key={data.registration_form_id}
            data={data}
            length={len}
            page={len >= 5 ? 5 : len}
            idx={idx + 1}
          />
        ))}
      </Slider>
      <S.CarYear>차 연대기</S.CarYear>
      <S.Resent>최신이력</S.Resent>
    </S.Container>
  );
}
