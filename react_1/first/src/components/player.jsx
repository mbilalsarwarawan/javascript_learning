import React from 'react';

function Player({ track }) {
  if (!track) {
    return (
      <div className="bg-gray-900 text-white p-4 text-center">
        <p className="text-lg">Select a track to play</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white p-4">
      <h3 className="text-xl font-semibold">{track.title}</h3>
      <p className="text-sm text-gray-400">{track.artist}</p>
      <div className="mt-4">
        {/* Placeholder for a future audio player */}
        <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
          Play
        </button>
      </div>
    </div>
  );
}

export default Player;
