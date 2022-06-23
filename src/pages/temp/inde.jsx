import styled from 'styled-components';
import Slider from 'react-slick';
import { TimeLine } from 'components';
const Container = styled.div`
  width: 1000px;
  height: 500px;

  margin-left: 100px;
`;

export default function Temp() {
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
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <button style={{ color: 'red' }}>ㅇㄴㄴ</button>,
    prevArrow: <div style={{ color: 'red' }}>ㅇㄴㅇ</div>,
  };

  const len = temp.length;
  return (
    <Container>
      <Slider {...settings}>
        {temp.map(data => (
          <TimeLine key={data.registration_form_id} data={data} />
        ))}
      </Slider>
    </Container>
  );
}
