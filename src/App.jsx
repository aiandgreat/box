import "./App.css";

function Header({ surname }) {
  return <h1 className="header">{surname}</h1>
}

function Box({ subject }) {
  return (
    <div className="box">
      {subject}
    </div>
  )
}

export default function App() {
  const surname = "Aian Jae Garcia";
  const subject = "CPEITEL";

  return (
    <div className="app">
      <Header surname={surname} />
      <Box subject={subject} />
    </div>
  )
}