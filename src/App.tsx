import React from 'react';
import { ExternalLink } from 'lucide-react';

const PixelLetter = ({ pixels }: { pixels: boolean[][] }) => (
  <div className="inline-flex flex-col gap-1 mx-1">
    {pixels.map((row, i) => (
      <div key={i} className="flex gap-1">
        {row.map((isActive, j) => (
          <div
            key={j}
            className={`w-2 h-2 ${
              isActive ? 'bg-emerald-400' : 'bg-transparent'
            }`}
          />
        ))}
      </div>
    ))}
  </div>
);

// Pixel patterns for letters
const letters = {
  N: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
  ],
  O: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  B: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
  ],
  A: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  L: [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  S: [
    [0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
  ],
};

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-between p-4">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            {['N', 'O'].map((letter, i) => (
              <PixelLetter key={i} pixels={letters[letter as keyof typeof letters]} />
            ))}
            <div className="w-4" /> {/* Space */}
            {['B', 'A', 'L', 'L', 'S'].map((letter, i) => (
              <PixelLetter key={i} pixels={letters[letter as keyof typeof letters]} />
            ))}
          </div>
        </div>
        
        <a
          href="https://ethandutson.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-200 font-medium"
        >
          Visit Ethan Dutson
          <ExternalLink size={20} />
        </a>
      </div>

      <footer className="text-gray-400 text-sm mt-8">
        © 2025 Ethan Dutson, Merry Lads LLC
      </footer>
    </div>
  );
}

export default App;