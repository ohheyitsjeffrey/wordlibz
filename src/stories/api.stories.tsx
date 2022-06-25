import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { getRandomArticle } from 'utils/getRandomArticle';

// A sloppy quick way to test this api function without fighting with typescript and REPL
export const GetRandomArticleTestUI = () => {
  const defaultMessage = 'Response will appear here when it arrives.';

  const [responseMessage, setResponseMessage] = useState(defaultMessage);

  return (
    <div>
      <h1>getRandomArticle()</h1>
      <br />
      <br />
      <button
        onClick={async () => {
          await getRandomArticle().then((response) => {
            setResponseMessage(JSON.stringify(response, null, 4));
            console.log(response);
          });
        }}
      >
        Click To Test
      </button>
      <br />
      <br />
      <h2>Response</h2>
      <div><pre>{responseMessage}</pre></div>
    </div>
  );
};

export default {
  title: 'API/getRandomArticle',
  component: GetRandomArticleTestUI,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof GetRandomArticleTestUI>;
