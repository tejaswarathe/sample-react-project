import ListGroup from "./components/ListGroup";

function App() {
  let iplTeams = [
    { id: 1, name: "Chennai Super Kings" },
    { id: 2, name: "Delhi Capitals" },
    { id: 3, name: "Gujarat Titans" },
    { id: 4, name: "Kolkata Knight Riders" },
    { id: 5, name: "Lucknow Super Giants" },
    { id: 6, name: "Mumbai Indians" },
    { id: 7, name: "Punjab Kings" },
    { id: 8, name: "Rajasthan Royals" },
    { id: 9, name: "Royal Challengers Bangalore" },
    { id: 10, name: "Sunrisers Hyderabad" },
  ];
  const handleSelectItem = (team: { id: number; name: string }) => {
    console.log(team.name);
  };
  return (
    <>
      <ListGroup
        teams={iplTeams}
        heading={"IPL Teams"}
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
