import React from 'react';
import MediaQuery from 'react-responsive';

export const Desktop = ({ children }) => {
  return <MediaQuery minWidth={1224}>{children}</MediaQuery>
};
export const Tablet = ({ children }) => {
  return <MediaQuery minWidth={768} maxWidth={1224}>{children}</MediaQuery>

};
export const Mobile = ({ children }) => {
  return <MediaQuery minWidth={320} maxWidth={768}>{children}</MediaQuery>
};
export const Default = ({ children }) => {
  return <MediaQuery minWidth={100}>{children}</MediaQuery>
};
export const NotMobile = ({ children }) => {
  return <MediaQuery minWidth={768}>{children}</MediaQuery>
};
