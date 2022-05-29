import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import StreamCreate from '../../pages/StreamCreate.jsx'
import StreamEdit from '../../pages/StreamEdit.jsx'
import StreamDelete from '../../pages/StreamDelete.jsx'
import StreamList from '../../pages/StreamList.jsx'
import StreamShow from '../../pages/StreamShow.jsx'
import Header from '../Header/Header.jsx'

const App = () => {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header />
        <div>
          <Route path='/' exact component={StreamList} />
          <Route path='/pages/new' component={StreamCreate} />
          <Route path='/pages/edit' component={StreamEdit} />
          <Route path='/pages/delete' component={StreamDelete} />
          <Route path='/pages/show' component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
