import React from 'react'
import Header from 
'./components/header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Createbiodata from './components/createbiodata';
import Createclinicalrecord from './components/createclinicalrecord';
import Patientlist from './components/Display/patientlist';
import Recordslist from './components/Display/recordslist';




const App: React.FC = () => {
 return (
    <div className="bg-image-container min-h-screen">
        <img src="images (2).jpg" alt="Image 1" className="bg-image" />
        <img src="images (1).jpg" alt="Image 2" className="bg-image" />
        <img src="images (3).jpg" alt="Image 3" className="bg-image" />
        <img src="download (2).jpg" alt="Image 4" className="bg-image" />

  <Router>
            <nav className="bg-black p-4">
                <ul className="flex space-x-4">
                    <img src='src/assets/toothlogo.png' alt='logo' className='h-12 w-12 mb-4'/>
                    <h1 className="text-green-800 text-4xl font-extrabold">Tooth Fixers</h1>
                </ul>
                    <ul className="flex space-x-10 justify-end">
                    <li className="mr-4">
                        <Link to="/" className="text-white hover:text-yellow-300 font-extrabold">Home</Link>
                    </li>
                    <li className="mr-12">
                        <Link to="/createbiodata" className="text-white hover:text-yellow-300 font-extrabold">Create Patient BioData</Link>
                    </li>
                    <li className="mr-8">
                        <Link to="/createclinicalrecord" className="text-white hover:text-yellow-300 font-extrabold">Clinical Record</Link>
                    </li>
                    <li className="mr-12">
                        <Link to="/patientlist" className="text-white hover:text-yellow-300 font-extrabold">Display All Patients</Link>
                    </li>
                    </ul>
                   
                
            </nav>
          
          
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/createbiodata" element={<Createbiodata />} />
                <Route path="/createclinicalrecord/" element={<Createclinicalrecord />} />

                <Route path="/patientlist" element={<Patientlist />} />
                <Route path="/recordslist/:patientId" element={<Recordslist />} />
            
            </Routes>
        
        
        </Router>
    </div>
 );
}
export default App
