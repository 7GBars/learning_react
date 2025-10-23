import React, { useState } from 'react';

type TTooManyRendersProps = {}

export const TooManyRenders: React.FC<TTooManyRendersProps> = ({}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  if (age < 10) {
    setAge(p => ++p) // ✅ Correct: passes down the condition
  }

  setAge(0) // 🚩 Wrong: calls the handler during render - даже если тоже самое значение!!

  return (
    <>
      age: {age}
    </>
  );
}