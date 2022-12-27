import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nghệ Sĩ Nổi Bật 2022",
      thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/a/8/e/8a8e74ad943da5b23cfb4f709aa31988.jpg"
    },
    {
      id: 2,
      name: "Bài Hát Viral Nổi Bật 2022",
      thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/2/5/4/025416435cd7bc00918ef736a471b763.jpg"
    },
    {
      id: 3,
      name: "V-Pop Nổi Bật 2022",
      thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/2/8/9/0289857b5e5da497cef2cc590c713fc3.jpg"
    },
    {
      id: 4,
      name: "US-UK Nổi Bật 2022",
      thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/3/7/0/2370813dad97bdd6b94a8a90406e9c2a.jpg"
    },
    {
      id: 5,
      name: "Nghệ Sĩ Mới Nổi Bật 2022",
      thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/f/8/4/ff849b97aec21619cb10f522a480f14c.jpg"
    }
  ];

  return (
    <div>
      <h2>Nổi Bật</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;