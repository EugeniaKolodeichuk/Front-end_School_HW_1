import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
/* import defaultImage from '../../images/default.jpg'; */

const Video = ({ playAddress }) => {
  return playAddress ? (
    <video width="300px" controls data-testid="video">
      <source src={playAddress} type="video/mp4;" />
      <track kind="captions" srcLang="en" label="english_captions" />
    </video>
  ) : (
    <Loader />
  );
};

Video.propTypes = {
  playAddress: PropTypes.string.isRequired,
};
export default Video;
