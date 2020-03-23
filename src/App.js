import React from 'react';
import { Card } from 'antd';
import './assets/css/App.css';

const cardData = [
  {
    nama : "Denny Caknan",
    job : "Android Developer",
    telephone : "08884877689",
  },
  {
    nama : "Sukimin",
    job : "UIUX",
    telephone : "08883270945",
  },
  {
    nama : "Raden Supardi",
    job : "iOS Developer",
    telephone : "08884474365",
  },
  {
    nama : "Bagong Fernandes",
    job : "Web Developer",
    telephone : "08883855564",
  },
  {
    nama : "Mukidi",
    job : "Android Developer",
    telephone : "08885610009",
  },
]

function App() {
  return (
    <div className="App">
      {cardData.map(data => (
        <Card title="Member Card" style={{ width: 500 }}>
          <p className="name"><u>{data.nama}</u></p>
          <p className="job">{data.job}</p>
          <p>{data.telephone}</p>
        </Card>
      ))}
    </div>
  );
}

export default App;