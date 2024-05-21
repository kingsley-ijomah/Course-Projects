import React, { useState } from 'react';
import './DynamicField.scss';

export default function DynamicField() {
  const [telephoneNumbers, setTelephoneNumbers] = useState(['']);

  const handleInputChange = (index, value) => {
    const newTelephoneNumbers = [...telephoneNumbers];
    newTelephoneNumbers[index] = value;
    setTelephoneNumbers(newTelephoneNumbers);
  };

  const addTelephoneNumber = () => {
    setTelephoneNumbers([...telephoneNumbers, '']);
  };

  const removeTelephoneNumber = (index) => {
    setTelephoneNumbers(telephoneNumbers.filter((_, i) => i !== index));
  };

  return (
    <div className='telephone'>
      <h1>Telephone Form</h1>
      <form>
        {telephoneNumbers.map((telephoneNumber, index) => (
          <div key={index} className='telephone__item'>
            <input
              className='telephone__input'
              type="text"
              id={`telephone-${index}`}
              value={telephoneNumber}
              placeholder="Telephone Number"
              onChange={(e) => handleInputChange(index, e.target.value)}
            />

            <button type="button" onClick={() => removeTelephoneNumber(index)}>
              Remove
            </button>
          </div>
        ))}

        <button className='telephone__more' type="button" onClick={addTelephoneNumber}>
          Add More
        </button>
      </form>
    </div>
  );
}
