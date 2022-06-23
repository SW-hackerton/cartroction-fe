import { useMemo } from 'react';
import { useTable } from 'react-table';
import * as S from './style';

export function InfoBox({ state }) {
  const { img, info } = state;

  const COLUMNS = [
    {
      Header: '카테고리',
      accessor: 'category',
    },
    {
      Header: '정비내역',
      accessor: 'content',
    },
    {
      Header: '비용',
      accessor: 'price',
    },
  ];

  const MOCK = [
    {
      id: 1,
      category: '엔진오일 교체',
      repair: '교체',
      cost: '300000',
    },
    {
      id: 2,
      category: '타이어 교채',
      repair: '교체',
      cost: '200000',
    },
    {
      id: 3,
      category: '기타 오일 교체',
      repair: '교체',
      cost: '600000',
    },
    {
      id: 4,
      category: '사고 수리',
      repair: '교체',
      cost: '500000',
    },
    {
      id: 5,
      category: '일반 수리',
      repair: '교체',
      cost: '700000',
    },
    {
      id: 6,
      category: '차량 점검',
      repair: '교체',
      cost: '1000000',
    },
    {
      id: 7,
      category: '기타',
      repair: '교체',
      cost: '50000',
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => info.repairList, []);
  const table = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;

  return (
    <S.Container>
      <S.Icon src={img} />
      <S.Header>정비내역</S.Header>
      <S.Wrapper>
        <table {...getTableProps()} frame="void">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </S.Wrapper>
    </S.Container>
  );
}
