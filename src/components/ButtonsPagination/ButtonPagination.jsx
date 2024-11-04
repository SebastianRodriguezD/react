import './ButtonPagination.css'
const ButtonPagination = ({
  currentPage,
  nextPage,
  prevPage,
  disablePrev,
  disableNext
}) => {
  return (
    <div className='pagination'>
      <button className='previous' onClick={prevPage} disabled={disablePrev}>
        {'<'}
      </button>
      <p className='page_number'>{currentPage}</p>
      <button className='next' onClick={nextPage} disabled={disableNext}>
        {'>'}
      </button>
    </div>
  )
}

export default ButtonPagination
