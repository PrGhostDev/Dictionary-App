// WordDetailsPage.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchWordDetails } from "../actions/dictionaryActions";

const WordDetailsPage = ({ selectedHistory }) => {
  const { word } = useParams();
  const dispatch = useDispatch();

  const { isLoading, wordDetails, error } = useSelector((state) => state);

  useEffect(() => {
    const selectedWord = selectedHistory || word;

    console.log("isLoading:", isLoading);
    console.log("wordDetails:", wordDetails);
    console.log("error:", error);
    dispatch(fetchWordDetails(selectedWord));
  }, [dispatch, word, selectedHistory]);

  const renderPhonetics = (phonetics) => {
    return (
      <div className="phonetics-container">
        {phonetics.map((phonetic, index) => (
          <div key={index}>
            <p>Phonetic: {phonetic.text}</p>
            <audio key={phonetic.audio} controls>
              <source src={phonetic.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    );
  };

  const renderMeanings = (meanings) => {
    return (
      <div className="meanings-container">
        {meanings.map((meaning, index) => (
          <div key={index}>
            <h4>{meaning.partOfSpeech}</h4>
            {meaning.definitions.map((definition, subIndex) => (
              <div key={subIndex}>
                <p>{definition.definition}</p>
                {definition.synonyms.length > 0 && (
                  <p className="synonyms-antonyms">
                    Synonyms: {definition.synonyms.join(", ")}
                  </p>
                )}
                {definition.antonyms.length > 0 && (
                  <p className="synonyms-antonyms">
                    Antonyms: {definition.antonyms.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="word-details-page">
      <h2>Word Details</h2>
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      {wordDetails && wordDetails.length > 0 && (
        <div className="word-container">
          <h3>{wordDetails[0]?.word}</h3>
          {renderPhonetics(wordDetails[0]?.phonetics)}
          {renderMeanings(wordDetails[0]?.meanings)}
        </div>
      )}
    </div>
  );
};

export default WordDetailsPage;
