import { Affix, Empty, Select } from 'antd'
import Search from 'antd/es/input/Search'

import Logo from '../images/moovee.png'
import SmallLogo from '../images/mooveefavi.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareDown } from '@fortawesome/free-regular-svg-icons'
import { faClockRotateLeft, faSearch } from '@fortawesome/free-solid-svg-icons'

const MooHeader = ({ searched, loading, handleSubmit, savedMovies, handleSelectMovieHistory }) => (
  <Affix
    offsetTop={0}
    className='affix'>
    <header className={searched ? 'header' : 'header unsearched'}>
      <img
        src={searched ? SmallLogo : Logo}
        alt='moovee logo'
      />
      {!searched && (
        <p>
          <em>Tonight, I'll be watching…</em>
        </p>
      )}
      <div className='header-elements'>
        <Search
          loading={loading}
          allowClear={true}
          className='movie-search'
          placeholder={searched ? '…' : 'Any movie name…'}
          enterButton={<FontAwesomeIcon icon={faSearch} />}
          onSearch={handleSubmit}
        />
        <Select
          notFoundContent={<Empty />}
          className='history-select'
          dropdownMatchSelectWidth={false}
          bordered={false}
          onChange={handleSelectMovieHistory}
          suffixIcon={<FontAwesomeIcon icon={faCaretSquareDown} />}
          placeholder='Search history'
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
