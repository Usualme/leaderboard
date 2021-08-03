import { useState, FC } from "react";
import { ParticipantType } from "../types";
import { FormButtonAdd, FormBox, FormInput, FormTitle } from "../styles/AddParticipantFormStyles";

interface Props {
  onSave: (value: ParticipantType) => void
}

const AddParticipantForm: FC<Props> = ({ onSave }) => {
  const [inputValue, setInputValue] = useState('')

  const saveParticipant = () => {
    if (!inputValue) {
      return;
    }

    const neWParticipant = {
      id: new Date().getTime(),
      name: inputValue,
      points: 0,
    }    
    
    onSave(neWParticipant)
    setInputValue('')
  }

  return (
    <FormBox>
      <FormTitle>Enter the name of the participant</FormTitle>
      <FormInput 
        type="text" 
        placeholder="Name" 
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)}
      />
      <FormButtonAdd onClick={() => saveParticipant()}>Add</FormButtonAdd>
    </FormBox>
  )
}

export default AddParticipantForm;
