/* eslint-disable react/prop-types */
import './socialNetwork.scss';
import React from 'react';
import Navbar from '../../components/navbar/navbar';

const SocialNetwork = () => (
  <div className="social-network">
    <Navbar />
    <div className="website-content">
      <div className="pages">
        Content
      </div>
      <div className="news">
        News
      </div>
    </div>
  </div>
);

export default SocialNetwork;
