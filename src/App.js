import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/newscards/NewsCards';

import useStyles from './style';

const alanKey="4af5c7571cd49448971c94a2304c598f2e956eca572e1d8b807a3e2338fdd0dc/stage";


function App() {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length|| parsedNumber<=0) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');


          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.header}>
        <div>
          <img className={classes.image} src="logo192.png" alt="logo" />
        </div>
        <div className={classes.logoContainer}>
          {newsArticles.length ? (
            <div className={classes.infoContainer}>
              <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
              <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
            </div>
          ) : <div className={classes.card}><Typography variant="h6" component="h6">Speak to this app and it will follow you. 
          Try saying different commands shown in the cards below.
              </Typography></div>}
        </div>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      
      <div className={classes.footer}>
          <Typography variant="body1" component="h2">
            Copyright &copy;2021
            <a className={classes.link} href="https://www.linkedin.com/in/dhruvtongia"> Dhruv Tongia </a>
          </Typography>
        </div>
    </div>
  );
}

export default App;

