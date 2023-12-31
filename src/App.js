import { lazy } from 'react';
import { Provider } from 'react-redux';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import Watch from './components/Watch';
import store from './utils/store';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';
import SearchedContainer from './components/SearchedContainer';



//const Watch = lazy(() => import('./components/Watch'))

const appRouter = createHashRouter([
  {
    path:'/',
    element:<Body />,
    children:[
      {
        path:"/",
        element:<MainContainer />
      },
      {
        path:"watch",
        element:<Watch />
      },
      {
        path:"demo",
        element:(<>
        <Demo /><Demo2/>
        </>)
      },
      {
        path:"results",
        element:<SearchedContainer />
      }
    ]
  }
])
function App() {
  return (
   <div>
      <Provider store={store}>
        <div className='flex flex-col h-screen'>
        <RouterProvider router={appRouter} />
        </div>
      </Provider>
    
   </div>
  );
}



export default App;
