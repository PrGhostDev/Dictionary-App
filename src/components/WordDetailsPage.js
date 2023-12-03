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
        {phonetics &&
          phonetics.map((phonetic, index) => (
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
        {meanings &&
          meanings.map((meaning, index) => (
            <div key={index}>
              <h4>{meaning.partOfSpeech}</h4>
              <ul>
                {meaning.definitions.map((definition, subIndex) => (
                  <li key={subIndex}>
                    {definition.definition}
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
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="word-details-page">
      <h2>Word Details</h2>
      {isLoading && <div className="loading" />}
      {error && <p className="error">Error: {error}</p>}
      {wordDetails && wordDetails.length > 0 && (
        <div>
          {wordDetails.map((details, index) => (
            <div key={index} className="word-container">
              <h3>{details.word}</h3>
              {renderPhonetics(details.phonetics)}
              {renderMeanings(details.meanings)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WordDetailsPage;