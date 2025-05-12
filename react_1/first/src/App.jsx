import React, { useState } from 'react';
import Navbar from './components/navbar.jsx';
import TrackList from './components/trackList.jsx';
import Player from './components/player.jsx';
import './App.css';




const sampleTracks = [
  { id: 1, title: "Song of Wind", artist: "Echo Bloom" },
  { id: 2, title: "Midnight Drive", artist: "Neon City" },
  { id: 3, title: "Ocean Waves", artist: "Blue Horizon" },
];

function App() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleTrackSelect = (track) => {
    setSelectedTrack(track);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4">
        <TrackList tracks={sampleTracks} onTrackSelect={handleTrackSelect} />
        <Player track={selectedTrack} />
      </main>
    </div>
  );
}

export default App;
