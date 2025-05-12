import React from 'react';

function TrackList({ tracks, onTrackSelect }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Track List</h2>
      <ul className="space-y-2">
        {tracks.map((track) => (
          <li
            key={track.id}
            className="bg-white shadow rounded-lg p-4 hover:bg-gray-50 transition cursor-pointer"
            onClick={() => onTrackSelect(track)}
          >
            <p className="font-medium">{track.title}</p>
            <p className="text-sm text-gray-500">{track.artist}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrackList;
