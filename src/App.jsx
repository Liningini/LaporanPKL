import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./menu"
import Opt from "./op"
import Page0 from "./page0"
import Page1 from "./page1"
import Page2 from "./page2"
import Page3 from "./page3"
import SelChapt from "./selchapt"
export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}/>
          <Route path="/opt" element={<Opt />}/>
          <Route path="/sellect-chapter" element={<SelChapt />}/>
          <Route path="/page0" element={<Page0 />}/>
          <Route path="/page1" element={<Page1 />}/>
          <Route path="/page2" element={<Page2 />}/>
          <Route path="/page3" element={<Page3 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}