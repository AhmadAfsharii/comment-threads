import React, { ReactElement } from 'react';
import Comments from './comments';

const App: React.FC = (): ReactElement => {
  return (
    <main className="container mx-auto py-10">
      <Comments />
    </main>
  );
};

export default App;
