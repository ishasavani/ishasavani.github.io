import NavigationTopBar from './navigation/topbar'
import MainPage from './pages/mainPage'
import PolicyPage from './pages/policy'
import Root from './pages/root'
import SciencePage from './pages/science'
import AcademicFreedomPage from './pages/academicFreedom'
import CollaborationPage from './pages/collaborations'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import { Routes } from './navigation/routes'
import AboutPage from './pages/about'
import CivicEngagementPage from './pages/civicEngagement'
import ContactPage from './pages/contact'

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>Something went wrong</div>,
    children: [
      {
        path: Routes.main,
        element: <MainPage />
      },
      {
        path: Routes.about,
        element: <AboutPage />
      },
      {
        path: Routes.science,
        element: <SciencePage />
      },
      {
        path: Routes.policy,
        element: <PolicyPage />
      },
      {
        path: Routes.civic_engagement,
        element: <CivicEngagementPage />
      },
      {
        path: Routes.academic_freedom,
        element: <AcademicFreedomPage />
      },
      {
        path: Routes.collaborations,
        element: <CollaborationPage />
      },
      {
        path: Routes.contact,
        element: <ContactPage />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
