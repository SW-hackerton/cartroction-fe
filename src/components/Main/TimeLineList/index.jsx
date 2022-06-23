import { TimeLine } from 'components';
import { useOutletContext } from 'react-router-dom';
import Slider from 'react-slick';
import prev from 'image/icon/prev.svg';
import next from 'image/icon/next.svg';
import tire from 'image/icon/tire.svg';
import inspection from 'image/icon/inspection.svg';
import normal from 'image/icon/normal.svg';
import crash from 'image/icon/crash.svg';
import enginOil from 'image/icon/enginOil.svg';
import etcOil from 'image/icon/etcOil.svg';
import ect from 'image/icon/ect.svg';
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
  // const [data] = useOutletContext();

  const datas = [
    { id: 1, src: tire, name: '타이어 교체' },
    { id: 2, src: inspection, name: '차량 점검' },
    {
      id: 3,
      src: crash,
      name: '사고 수리',
    },
    {
      id: 4,
      src: normal,
      name: '일반 수리',
    },
    {
      id: 5,
      src: enginOil,
      name: '엔진 오일 교체',
    },
    {
      id: 6,
      src: etcOil,
      name: '기타 오일 교체',
    },
    {
      id: 7,
      src: ect,
      name: '기타',
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
        {datas.map((data, idx) => (
          <TimeLine
            key={data.registration_form_id}
            data={data}
            length={data.length}
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
