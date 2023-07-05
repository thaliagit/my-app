import React, { Component } from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en: {
        current_lang: "You have chosen English."
    },
    gr: {
        current_lang: "Έχεις διαλέξει Ελληνικά."
    }
}

class DisplayLanguage extends Component {
  render() {
    return (
      <>
        <LanguageContext.Consumer>
            { language => {
                return (
                    <div>
                        <h1>{Strings[language].current_lang}</h1>
                    </div>
                )
            }}
        </LanguageContext.Consumer>
      </>
    );
  }
}

export default DisplayLanguage;
