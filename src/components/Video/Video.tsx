import React from 'react';
/* import PropTypes from 'prop-types'; */
import Loader from '../Loader/Loader';
import { VideoProperties } from '../../types/feedTypes';

/* type Properties = {
  cover: string
} */

const Video = ({ downloadAddr }: VideoProperties) => {
  return downloadAddr ? (
    <video width="300px" controls data-testid="video">
      <source src={downloadAddr} type="video/mp4;" />
      <track kind="captions" srcLang="en" label="english_captions" />
    </video>
  ) : (
    <Loader />
  );
};

/* Video.propTypes = {
  cover: PropTypes.string.isRequired,
}; */
export default Video;
