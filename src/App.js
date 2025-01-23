import React from "react";

const App = () => {
  return (
    <div>
      <iframe
        id="iframe"
        title="login"
        src="https://web.feature2.digiqc.com"
        // sandbox="allow-scripts allow-same-origin allow-forms allow-downloads"
        width={1500}
        height={800}
      />
    </div>
  );
};

export default App;
