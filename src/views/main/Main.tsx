import React from 'react';
import LayoutContainer from './components/layout/container/LayoutContainer';
import Catalog from './components/catalog/Catalog';
import TopBar from './components/layout/top-bar/TopBar';

export default function Main() {
  return (
    <LayoutContainer>
      <TopBar />
      <Catalog />
    </LayoutContainer>
  );
}
