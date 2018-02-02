import React from 'react';
import Linkify from 'react-linkify';

export const urlMatch = (body,type) => {
  const url = body.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
  let beforeUrl;
  let afterUrl;

  const height = type === "post" ? "275" : "228";
  const width = type === "post" ? "492" : "410";

  if (url) {
    beforeUrl = body.split("http")[0];
    afterUrl = url[2].slice(11);
    const videoId = url[2].slice(0, 11);

    body = (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        height={height} width={width} style={{ border: 'none' }}>
      </iframe>
    );
  } else {
    body = <Linkify>{ body }</Linkify>;
  }

  return [beforeUrl, body, afterUrl];
};
