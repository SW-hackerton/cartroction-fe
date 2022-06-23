import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { NavTemplate } from 'components';
import * as S from './style';

const data = [
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
  // {
  //   registration_form_id: 7,
  //   user_id: 1,
  //   manger_name: 'hello',
  //   date: '2020-01-04',
  //   repair_list: {
  //     카테고리1: '설명1',
  //     카테고리2: '설명2',
  //     카테고리3: '설명3',
  //   },
  //   car_number: '1234바 8900',
  //   car_distance: '1224km',
  //   estimates_image_url: '~',
  //   car_image_url: '~',
  // },
  // {
  //   registration_form_id: 8,
  //   user_id: 1,
  //   manger_name: 'hello',
  //   date: '2020-01-04',
  //   repair_list: {
  //     카테고리1: '설명1',
  //     카테고리2: '설명2',
  //     카테고리3: '설명3',
  //   },
  //   car_number: '1234바 8900',
  //   car_distance: '1224km',
  //   estimates_image_url: '~',
  //   car_image_url: '~',
  // },
  // {
  //   registration_form_id: 9,
  //   user_id: 1,
  //   manger_name: 'hello',
  //   date: '2020-01-04',
  //   repair_list: {
  //     카테고리1: '설명1',
  //     카테고리2: '설명2',
  //     카테고리3: '설명3',
  //   },
  //   car_number: '1234바 8900',
  //   car_distance: '1224km',
  //   estimates_image_url: '~',
  //   car_image_url: '~',
  // },
  // {
  //   registration_form_id: 10,
  //   user_id: 1,
  //   manger_name: 'hello',
  //   date: '2020-01-04',
  //   repair_list: {
  //     카테고리1: '설명1',
  //     카테고리2: '설명2',
  //     카테고리3: '설명3',
  //   },
  //   car_number: '1234바 8900',
  //   car_distance: '1224km',
  //   estimates_image_url: '~',
  //   car_image_url: '~',
  // },
];

export function Search() {
  const [input, setInput] = useState('');
  const navigation = useNavigate();

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      navigation('/search/result');
      return;
    }

    setInput(e.target.value);
  };

  return (
    <NavTemplate isSearchBar={false}>
      <S.Container>
        <S.Wrapper>
          <S.SearchBoxWrap>
            <S.SearchBox
              placeholder="차량번호를 검색해주세요."
              onKeyPress={onKeyPress}
            />
            <S.SearchBox__icon></S.SearchBox__icon>
          </S.SearchBoxWrap>
          <S.SubText>해당 차량의 연대기 입니다.</S.SubText>
          <Outlet context={[data]} />
        </S.Wrapper>
      </S.Container>
    </NavTemplate>
  );
}
