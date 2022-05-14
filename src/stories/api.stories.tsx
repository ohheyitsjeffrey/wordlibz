import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';

// A sloppy quick way to test this api function without fighting with typescript and REPL
export const getArticleTestUI = () => {
  const defaultMessage = 'Response will appear here when it arrives.';

  const [responseMessage, setResponseMessage] = useState(defaultMessage);

  return (
    <div>
      <h1>getRandomArticle()</h1>
      <br />
      <br />
      <button>Click To Test</button>
      <br />
      <br />
      <h2>Response</h2>
      <div>{responseMessage}</div>
    </div>
  );
};

export default {
  title: 'API/getRandomArticle',
  component: getArticleTestUI,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof getArticleTestUI>;
