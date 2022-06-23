import { Header } from 'components';
import React from 'react';

export function ManageRoute({ element: Element, showSearchBar, hidden }) {
  return (<>
    <Header showSearchBar={showSearchBar} userType={1} hidden={hidden} />
    <Element />
  </>);
}
