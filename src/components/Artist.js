import React from 'react';

const Artist = ({ artist }) => {
  // safe guard if artist is not defined. react wont render anything
  if (!artist) return null;

  const { images ,name, followers, genres } = artist;

  // safe guard in images if profile has no images
  return (
    <div>
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>{genres.join(',')}</p>
      <img 
        src={images[0] && images[0].url} 
        alt='artist-profile' 
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          objectFit: 'cover'
        }}
      /> 
    </div>
  )
}

export default Artist;
