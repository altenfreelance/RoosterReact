import React from 'react';
const playerStyle = { backgroundColor: 'rgba(128,0,0, 0.8)' }

function Songs() {
    return (
        <div>
            <h1>Audio</h1>
            {playlist.map((song) => {return (
            <div key={song.title} className="my-2 mx-5 rounded p-4" style={playerStyle}>
                <h4 style={{ color: '' }}>{song.title}</h4>
                <audio controls src={song.url} style={{ width: "100%" }} />
            </div>);
            })}
        </div>
    );
}

const playlist = [
    {
        url: 'audio/BloodInTheSoil.mp3',
        title: 'Blood In the Soil',
    },
    {
        url: 'audio/BloodInTheSoil.mp3',
        title: '2 In the Soil',
    }
]

export default Songs