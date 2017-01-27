import { connect } from 'react-redux';
import React, { Component } from 'react';

import Footer from '../footer';
import Header from '@mtk/mcs-components/lib/Header';

import Breadcrumb from './breadcrumb';
import PanelHeader from './PanelHeader';
import NewPrototypeCard from './newPrototypeCard';
import PrototypeCard from './prototypeCard';

import prototypeStyle from './prototypes.css';

const Prototypes = ({ prototypes, ...props }) => {
  console.log(prototypes);
  return (
    <div>
      <Header />
      <div className={prototypeStyle.base}>
        <Breadcrumb />
        <PanelHeader />
        <div className={prototypeStyle.content}>
          <NewPrototypeCard />
          {
            prototypes.prototypeList.map((prototype) => {
              return (<PrototypeCard {...prototype} {...props} />);
            })
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Prototypes;