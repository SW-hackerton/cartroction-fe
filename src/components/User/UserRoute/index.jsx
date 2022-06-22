import { Header } from 'components';
import React from 'react';

export function UserRoute({ element: Element, showSearchBar }) {
  return (<>
    <Header showSearchBar={showSearchBar} userType={0} />
    <Element />
  </>);
}
