import { TimeLine } from 'components';
import * as S from './style';

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
  return (
    <S.Container>
      {temp.map((data, idx) => (
        <TimeLine
          key={data.registration_form_id}
          data={data}
          length={temp.length}
          idx={idx}
        />
      ))}
    </S.Container>
  );
}
