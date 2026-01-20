// Main React App Component
import React from 'react';
import Recorder from './components/Recorder';
import Waveform from './components/Waveform';
import EffectsPanel from './components/EffectsPanel';
import AIMastering from './components/AIMastering';

const App = () => (
  <div>
    <h1>Garcia's Studio</h1>
    <Recorder />
    <Waveform />
    <EffectsPanel />
    <AIMastering />
  </div>
);

export default App;