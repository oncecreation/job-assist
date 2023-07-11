import React, { useState } from 'react'

function MultiSelect() {
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleOptionSelect = (event) => {
    const selectedOption = event.target.value
    if (selectedOptions.includes(selectedOption)) {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== selectedOption)
      )
    } else {
      setSelectedOptions([...selectedOptions, selectedOption])
    }
  }

  return (
    <div className="relative inline-block w-full">
      <select
        multiple
        className="block w-full border-2 border-gray-300 rounded-md p-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={selectedOptions}
        onChange={handleOptionSelect}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
        </svg>
      </div>
    </div>
  )
}

export default MultiSelect
