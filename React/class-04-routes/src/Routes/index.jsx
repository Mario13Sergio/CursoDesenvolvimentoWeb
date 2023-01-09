import { Home } from '../pages/Home'
import { Galleria } from '../pages/Galleria'
import { Contato } from '../pages/Contato'
import { Routes, Route } from "react-router-dom"
export function AppRoutes() {
    return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/galeria' element={<Galleria />}/>
            <Route path='/contato' element={<Contato />}/> 
        </Routes>
    </>
    )
}