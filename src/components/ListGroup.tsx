import { useState } from "react";

interface Props {
  teams: { id: number; name: string }[];
  heading: string;
  onSelectItem: (team: { id: number; name: string }) => void;
}

function ListGroup({ teams, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {teams.map((team, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={team.id}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(team);
            }}
          >
            {team.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
