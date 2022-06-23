import { useRef, useState, useEffect } from 'react';
import nextWhite from 'image/icon/nextWhite.svg';
import { api } from 'utils';
import dayjs from 'dayjs';
import * as S from './style';

export function ManagerComponent() {
  const selectCategory = [
    '엔진오일교체',
    '타이어교체',
    '기타오일교체',
    '사고수리',
    '침수수리',
    '일반수리',
    '차량점검',
    '기타',
  ];
  const imgInput = useRef();
  const [estimateData, setEstimateData] = useState({
    carNumber: '22이2222',
    manager: '해커',
    carDistance: '10000',
  });
  const [repairList, setRepairList] = useState([
    {
      category: 0,
      content: '',
      price: 0,
    },
  ]);
  const [src, setFiles] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (src) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(src);
    } else {
      setPreview(null);
    }
  }, [src]);

  const mkTableAddBtn = () => {
    return (
      <S.TableRowBox>
        <S.TableAdd onClick={addInputForm} />
      </S.TableRowBox>
    );
  };
  const mkTableHead = (category, content, price) => {
    return (
      <>
        <S.Line />
        <S.TableRowBox isHead={true}>
          <S.TableRow>{category}</S.TableRow>
          <S.TableRow>{content}</S.TableRow>
          <S.TableRow>{price}</S.TableRow>
        </S.TableRowBox>
        <S.Line />
      </>
    );
  };
  const mkSelectBox = data => {
    return (
      <S.SelectCategory onChange={onChangeInput(data, 'category')}>
        {selectCategory.map((category, idx) => (
          <option key={idx} value={idx}>
            {category}
          </option>
        ))}
      </S.SelectCategory>
    );
  };
  const mkTableRow = (data, idx) => {
    return (
      <div key={idx}>
        <S.TableRowBox>
          {mkSelectBox(data)}
          <S.TableRowInput onChange={onChangeInput(data, 'content')} />
          <S.TableRowInput onChange={onChangeInput(data, 'price')} />
        </S.TableRowBox>
        <S.Line />
      </div>
    );
  };
  const addInputForm = () => {
    setRepairList([
      ...repairList,
      {
        category: 0,
        content: '',
        price: 0,
      },
    ]);
  };
  const onChangeInput = (data, key) => {
    return ({ target }) => {
      data[key] = target.value;
    };
  };
  const onLoadFile = e => {
    const file = e.target.files[0];
    setFiles(file);
  };

  const onClick = async () => {
    const { carNumber, manager, carDistance } = estimateData;

    const data = {
      id: 0,
      managerName: manager,
      repairList: repairList.map(repair => ({
        id: 0,
        category: selectCategory[Number(repair.category)],
        content: repair.content,
        price: repair.price,
      })),
      carNumber,
      carDistance,
      estimatesImageUrl: preview,
      carImageUrl: preview,
      date: dayjs().format('YYYY-MM-DD'),
    };

    const res = await api.submitForm({ data });
    if (res === 'success') alert('제출 성공');
    
    setEstimateData({});
    setRepairList([]);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.EstimateBox onClick={() => imgInput.current.click()}>
          {src ? (
            <S.Img src={src ? URL.createObjectURL(src) : null} />
          ) : (
            <>
              <S.EstimateImg />
              <S.EstimateIcon />
              <S.EstimateLabel>견적서를 추가해주세요</S.EstimateLabel>
            </>
          )}
          <S.FileInput
            src={src ? URL.createObjectURL(src) : null}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={imgInput}
            onChange={onLoadFile}
          />
        </S.EstimateBox>

        <S.FormWrapper>
          <S.InputWrapper>
            <S.InputBox>
              <S.EstimateDataBox>
                <S.InputForm>
                  <S.InputLabel>차량 번호:</S.InputLabel>
                  <S.Input
                    onChange={onChangeInput(estimateData, 'carNumber')}
                  />
                </S.InputForm>
                <S.InputForm>
                  <S.InputLabel>담당자:</S.InputLabel>
                  <S.Input onChange={onChangeInput(estimateData, 'manager')} />
                </S.InputForm>
                <S.InputForm>
                  <S.InputLabel>주행거리:</S.InputLabel>
                  <S.Input
                    onChange={onChangeInput(estimateData, 'carDistance')}
                  />
                </S.InputForm>
              </S.EstimateDataBox>
              <S.FullLine></S.FullLine>
              <S.Content>
                <S.Label>정비 내역</S.Label>
              </S.Content>
              {mkTableHead('카테고리', '정비내역', '비용', true)}
              {repairList.map(mkTableRow)}
              {mkTableAddBtn()}
            </S.InputBox>
          </S.InputWrapper>
          <S.SubmitBtn onClick={onClick}>
            제출하기
            <img src={nextWhite} alt="next" />
          </S.SubmitBtn>
        </S.FormWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
