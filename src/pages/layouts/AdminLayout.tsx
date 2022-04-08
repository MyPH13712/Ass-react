import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import NavAdmin from '../../components/NavAdmin'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <header>
            <NavAdmin />
        </header>
        
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminLayout