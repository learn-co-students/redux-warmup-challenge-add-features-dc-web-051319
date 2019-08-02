import React from 'react';
import { connect } from 'react-redux'
import * as actions from "../actions"

const MuseumPicker = ({fetchPaintings, fetchByMuseum}) => {
  return (
    <div className="row">
      <div className="ui menu">
        <div onClick={() => fetchPaintings()} className="active item">All Museums</div>
        <div onClick={() => fetchByMuseum("National Gallery of Art, Washington D.C.")} className="item">National Gallery of Art, Washington D.C.</div>
      </div>
    </div>
  );
};

// National Gallery of Art, Washington D.C.

export default connect(null, actions)(MuseumPicker);
