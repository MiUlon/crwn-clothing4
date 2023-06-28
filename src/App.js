import Home from './routes/home/home.components';
import Navigation from './routes/navigation/navigation.component';
import { Routes, Route } from 'react-router-dom';

const Test = () => {
  return (
    <div>
      <h1>This is test</h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='test' element={<Test />}/>
      </Route>
    </Routes>
  )
}

export default App;
