import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import IntroductionForm from './pages/IntroductionForm.jsx'
import Contract from './pages/Contract.jsx'
import Survey from './pages/Survey.jsx'
import Cards from './pages/Cards.jsx'
import Inventory from './pages/Inventory.jsx'
import Documentation from './pages/Documentation.jsx'
import Product from './pages/Product.jsx'
import WebsiteEvaluations from './pages/WebsiteEvaluations.jsx'
import Hobby from './pages/Hobby.jsx'
import Slideshow from './pages/Slideshow.jsx'
import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="intro_form" element={<IntroductionForm />} />
          <Route path="contract" element={<Contract />} />
          <Route path="survey" element={<Survey />} />
          <Route path="cards" element={<Cards />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="product" element={<Product />} />
          <Route path="slideshow" element={<Slideshow />} />
          <Route path="website_evaluations" element={<WebsiteEvaluations />} />
          <Route path="hobby" element={<Hobby />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
