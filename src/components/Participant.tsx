import { FC } from "react";
import { ID, ParticipantType } from "../types";
import { Operations } from "../constants/operations";
import { ButtonChange, ButtonRemove, IndexBox, ParticipantName, NameBox, ParticipantBox, Point, PointsBox } from "../styles/ParticipantStyles";

interface Props extends ParticipantType {
  index: number
  onChangePoint: (id: ID, operation: Operations) => void
  onRemove: (id: ID) => void
}

const Participant: FC<Props> = ({id, index, name, points, onChangePoint, onRemove }) => {
  return (
    <ParticipantBox>
      <NameBox>
        <IndexBox>
          {index + 1}
        </IndexBox>
        <ParticipantName>{name}</ParticipantName>
      </NameBox>
      <PointsBox>
        <Point>{points}</Point>
        <ButtonChange onClick={(e) => onChangePoint(id, Operations.SUBTRACT)}>-</ButtonChange>
        <ButtonChange onClick={(e) => onChangePoint(id, Operations.ADD)}>+</ButtonChange>
        <ButtonRemove onClick={() => onRemove(id)}>&times;</ButtonRemove>
      </PointsBox>
    </ParticipantBox>
  )
}

export default Participant;
