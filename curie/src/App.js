import React from 'react';
import GlobalStyles from './GlobalStyles';
import SearchBar from './components/SearchBar';
import ExperimentAssistant from './components/ExperimentAssistant';
import FurtherQs from './components/FurtherQs';
import RelevantTheory from './components/RelevantTheory';
import PossibleExperiments from './components/PossibleExperiments';
import ProjList from './components/ProjList';

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <h1>Curie.ai</h1>
        <SearchBar />
        <ExperimentAssistant />
        <FurtherQs />
        <RelevantTheory />
        <PossibleExperiments  />
        <ProjList />
        {/* Add more components here in Step 3 */}
      </div>
    </>
  );
}

export default App;
