import { Outlet } from "react-router-dom"
function App() {


  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto py-8 px-4">
        <Outlet />
      </div>
    </main>
  )
}

export default App
