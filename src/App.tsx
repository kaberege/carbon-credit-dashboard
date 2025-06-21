import { Outlet } from "react-router-dom"

// Main app view
const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto py-8 px-4">
        <Outlet />
      </div>
    </main>
  )
}

export default App
