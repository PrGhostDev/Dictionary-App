import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedHistory } from '../actions/dictionaryActions';
import './nav.css';
import WordDetailsPage from './WordDetailsPage';

const HistoryPage = () => {
  const dispatch = useDispatch();
  const searchHistorySet = useSelector((state) => new Set(state.searchHistory));
  const selectedHistory = useSelector((state) => state.selectedHistory);

  const handleHistoryItemClick = (word, e) => {
    e.preventDefault();
    dispatch(setSelectedHistory(word));
  };

  return (
    <div className="history-page">
      <h2>Search History</h2>
      <ul className="history-list">
        {[...searchHistorySet].map((word, index) => (
          <Link to={`/word/${word}`} key={index}>
            <li onClick={(e) => handleHistoryItemClick(word, e)}>{word}</li>
          </Link>
        ))}
      </ul>

      {/* Pass selectedHistory as a prop to WordDetailsPage */}
      {selectedHistory && <WordDetailsPage selectedHistory={selectedHistory} />}
    </div>
  );
};

export default HistoryPage;