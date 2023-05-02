import React, { useState } from 'react';


/*-------------------- Menu -------------------*/
const ContentOption = ({ name, component }) => {
  return (
    <option value={name}>{name}</option>
  );
};

const ContentMenu = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div>
      <h2>Scegli il contenuto:</h2>
      <select value={selectedOption} onChange={handleSelectChange}>
        <ContentOption name="Contenuto 1" component={<MyComponent1 />} />
        <ContentOption name="Contenuto 2" component={<MyComponent2 />} />
        <ContentOption name="Contenuto 3" component={<MyComponent3 />} />
      </select>
    </div>
  );
};

/*-------------------- Iframe -------------------*/
const MyFrame = ({ content }) => {
  return (
    <iframe>
      {content}
    </iframe>
  );
};

/*-------------------- Componenti -------------------*/
const MyComponent1 = () => {
  return (
    <div>
      <h1>Questo è il contenuto 1!</h1>
    </div>
  );
};

const MyComponent2 = () => {
  return (
    <div>
      <h1>Questo è il contenuto 2!</h1>
    </div>
  );
};

const MyComponent3 = () => {
  return (
    <div>
      <h1>Questo è il contenuto 3!</h1>
    </div>
  );
};


/*-------------------- main -------------------*/
const Prova = () => {
  const [selectedContent, setSelectedContent] = useState('');

  const handleContentSelect = (contentName) => {
    setSelectedContent(contentName);
  };

  let content = null;

  if (selectedContent === 'Contenuto 1') {
    content = <MyComponent1 />;
  } else if (selectedContent === 'Contenuto 2') {
    content = <MyComponent2 />;
  } else if (selectedContent === 'Contenuto 3') {
    content = <MyComponent3 />;
  }

  return (
    <div>
      <ContentMenu onSelect={handleContentSelect} />
      <iframe>
        {content}
      </iframe>
    </div>
  );
};

export default Prova;