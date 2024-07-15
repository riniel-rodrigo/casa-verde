import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
  } from 'react-router-dom';
  
  import DefaultLayout from '../layout/DefaultLayout';
  import Home from '../containers/Home/index.jsx';
  
  export const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    )
  );
  