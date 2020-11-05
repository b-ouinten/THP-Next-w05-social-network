/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const NavElem = ({
  path, img, label, width, height, className,
}) => (
  <Link to={path} className={className}>
    <img src={img} alt={label} width={width || '23'} height={height || '23'} />
    <span>{label}</span>
  </Link>
);

export default NavElem;
