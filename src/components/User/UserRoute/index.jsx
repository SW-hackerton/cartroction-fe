import { Header } from 'components';
import React from 'react';

export function UserRoute({ element: Element, showSearchBar, hidden }) {
  return (<>
    <Header showSearchBar={showSearchBar} userType={0} hidden={hidden} />
    <Element />
  </>);
}
