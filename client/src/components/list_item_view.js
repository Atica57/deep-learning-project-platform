import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  CV, NLP, RecSys, ETC,
} from '../../../db.js';

const ListItemView = (params) => {
  const { name } = params.match.params;
  const [data, setData] = useState([]);

  //database에서 name에 맞는 데이터를 불러와서
  const getData = (name) => {
    if (name === 'CV') setData(CV);
    else if (name === 'NLP') setData(NLP);
    else if (name === 'RecSys') setData(RecSys);
    else setData(ETC);
  };

  useEffect(() => { getData(); }, []);
  useEffect(() => {
    getData(name);
    console.log("name changed");
  }, [name])
  
  return (
    <div className="view_item" style={{ display: 'flex' }}>
      <h1>{name}</h1>
      <div
        className="list_item"
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '-webkit-fill-available',
        }}
      >
        {data
          ? data.map(cur => (
            <Link to={`/view/${name}/${cur.id}`}>
              <div
                className="item_card"
                style={{
                  width: '300px',
                  marginRight: '40px',
                  marginBottom: '80px',
                }}
              >
                <h3>{cur.title}</h3>
                <img src={cur.image} width="150px" />
                <span>{cur.description > 100 ? cur.description.slice(0, 99) : cur.description}</span>
              </div>
            </Link>
          ))
          : <h1>There is no item... </h1>
      }
      </div>
    </div>
  );
};

/*
ListItemView.propTypes = {
  viewItem: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  item: PropTypes.object,
};

ListItemView.defaultProps = {
  item: null,
};
*/

export default ListItemView;
