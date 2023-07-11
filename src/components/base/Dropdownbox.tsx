import React, { useState, FC } from 'react'
import classNames from 'classnames'
const Icon = () => {
  return (
    <svg
      aria-hidden="true"
      className="w-4 h-4 ml-1"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

const SearchIcon = () => (
  <svg
    aria-hidden="true"
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    ></path>
  </svg>
)

interface propType {
  options: Array<string>
  selectedOption: string
  setSelectedOption: Function
  caption?: string
}
const DropdownBox = ({
  options,
  selectedOption,
  setSelectedOption,
  caption = ''
}: propType) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleDropdownClick = () => {
    setIsOpen(!isOpen)
  }
  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  const renderOption = (option: string, index: number) => (
    <li key={index}>
      <button
        type="button"
        onClick={() => handleOptionClick(options[index])}
        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
        role="menuitem"
      >
        <div className="inline-flex items-center">{option}</div>
      </button>
    </li>
  )

  return (
    <div className="flex">
      <label
        htmlFor="location-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        {caption}
      </label>
      <button
        id="dropdown-button-2"
        onClick={handleDropdownClick}
        className={classNames(
          'flex-shrink-0 z-10 w-36 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600'
        )}
        type="button"
      >
        {selectedOption}
        {'  '} <Icon />
      </button>
      <div
        id="dropdown-search-city"
        className={classNames(
          'z-10 bg-white w-36 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 absolute',
          { hidden: !isOpen }
        )}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdown-button-2"
        >
          {options.map((option, index) => renderOption(option, index))}
        </ul>
      </div>
      <div className="relative w-full">
        <input
          type="search"
          className="block p-2.5 w-full z-10 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search for city or address"
          required
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <SearchIcon />
          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  )
}
export default DropdownBox
