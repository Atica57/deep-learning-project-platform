import React, { useState } from 'react';
import { projects } from '../../../db.js';

import ImageProject from '../project/computerVision/imageClassification';
import CatDog from '../project/computerVision/catDog';

const DetailedPage = (params) => {
  const category = params.match.params.name; // 예를 들면 'CV'
  const cat_id = params.match.params.id; // 예를 들면 '101'
  const project_ = projects[category].filter(cur => parseInt(cur.id) === parseInt(cat_id));
  const project = project_[0];
  // dynamic importing
  // let module = await import('../project/computerVision/imageClassification');
  const handleComponent = (param) => {
    console.log("component: ", param);
    if (param === 'imageClassification') return <ImageProject />;
    if (param === 'catDog') return <CatDog />;
  };

  return (
    <div className="detailed" style={{ padding:"100px", paddingTop:"20px" }}>
      {/* Project Title */}
      <h2>{`Project Name: ${project.title}`}</h2>

      {/* Project: get the component path */}
      <div className="projectContainer" style={{ padding:"70px" }}>
        {handleComponent(project.component)}
      </div>

      {/* Summary */}

      {/* Description */}
      <h3>ABOUT THIS PROJECT</h3>
      <span>{project.description}</span>

      {/* Skillset */}
      <h3>SKILLSET</h3>
      <ul>
        <li>Basic Model: Convolutional Neural Networ</li>
        <li>Optimizer: Adam Optimizer</li>
        <li>Loss: MSE</li>
      </ul>
      <button
        type="button"
        onClick={() => params.history.goBack()}
      >Back
      </button>
    </div>
  );
};

export default DetailedPage;