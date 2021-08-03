import { useState, FC } from "react";
import { Operations } from "../constants/operations";
import { ID, ParticipantType } from "../types";
import AddParticipantForm from "./AddParticipantForm";
import Participant from "./Participant";
import Header from "./Header";
import { Board, Title } from "../styles/LeaderListStyles";

const initialState = [
  {
    id: 0,
    name: 'Felix Grey',
    points: 0,
  },
  {
    id: 1,
    name: 'John White',
    points: 0,
  },
  {
    id: 2,
    name: 'Max Green',
    points: 0,
  },
  {
    id: 3,
    name: 'William Black',
    points: 0,
  },
  {
    id: 4,
    name: 'Mike Blue',
    points: 0,
  }
]

const LeaderList: FC = () => {
  const [participants, setParticipants] = useState<ParticipantType[]>(initialState);

  const addParticipant = (newParticipant: ParticipantType): void => {
    setParticipants(participants => [ ...participants, newParticipant])
  }

  const removeParticipant = (id: ID): void => {
    setParticipants(participants => participants.filter(participant => participant.id !== id))
  }

  const changePoint = (id: ID, operation: Operations): void => {
    const currentParticipant = participants.find(participant => participant.id === id);

    if (!currentParticipant) return;

    let updatedParticipant;

    switch (operation) {
      case Operations.ADD:
        updatedParticipant = {
          ...currentParticipant,
          points: currentParticipant.points + 1,
        }
        break;
      case Operations.SUBTRACT:
        if (currentParticipant.points === 0) {
          updatedParticipant = { ...currentParticipant };
          break;
        }

        updatedParticipant = {
          ...currentParticipant,
          points: currentParticipant.points - 1,
        }
        break;
      default:
        updatedParticipant = { ...currentParticipant }
    };

    const otherParticipants = participants.filter(participant => participant.id !== id);

    setParticipants([ ...otherParticipants, updatedParticipant]);
  }

  return (
    <Board>
      <Title>Leaderboard</Title>
      <Header />

      {(!participants) 
        ? <p>No data</p>
        : participants
          .sort((a, b) => b.points - a.points)
          .map((participant, index) =>
            <Participant
              key={participant.id}
              index={index}
              {...participant}
              onChangePoint={changePoint}
              onRemove={removeParticipant}
            />
          )
      }
      <AddParticipantForm onSave={addParticipant} />
    </Board>
  )
}

export default LeaderList;
