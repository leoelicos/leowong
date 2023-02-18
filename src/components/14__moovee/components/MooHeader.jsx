import { Affix, Select } from 'antd'
import Search from 'antd/es/input/Search'

import Logo from '../images/moovee.png'
import SmallLogo from '../images/mooveefavi.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareDown } from '@fortawesome/free-regular-svg-icons'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'

const MooHeader = ({ searched, loading, handleSubmit, savedMovies, handleSelectMovieHistory }) => (
  <Affix
    offsetTop={0}
    className='affix'>
    <header className={searched ? 'header' : 'header unsearched'}>
      <img
        src={searched ? SmallLogo : Logo}
        alt='moovee logo'
      />
      <div className='header-elements'>
        <Search
          loading={loading}
          allowClear={true}
          className='movie-search'
          placeholder={searched ? '…' : 'Any movie name…'}
          enterButton={searched ? 'Find' : 'Find Trailer'}
          onSearch={handleSubmit}
        />
        <Select
          className='history-select'
          disabled={savedMovies.length === 0}
          dropdownMatchSelectWidth={false}
          bordered={false}
          onChange={handleSelectMovieHistory}
          suffixIcon={<FontAwesomeIcon icon={faCaretSquareDown} />}
          placeholder={<FontAwesomeIcon icon={faClockRotateLeft} />}
          options={savedMovies?.map((title, i) => ({
            value: i,
            label: title
          }))}
        />
      </div>
    </header>
  </Affix>
)

export default MooHeader
