import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 p-4 text-white text-center text-2xl">
        GHC Dashboard
      </header>

      <div className="flex flex-grow">
        <aside className="w-1/4 bg-gray-200 p-4">
          <nav>
            <ul>
              <li className="p-2"><a href="#dashboard" className="text-blue-600">Dashboard</a></li>
              <li className="p-2"><a href="#settings" className="text-blue-600">Settings</a></li>
              <li className="p-2"><a href="#profile" className="text-blue-600">Profile</a></li>
            </ul>
          </nav>
        </aside>

        <main className="w-3/4 bg-white p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome to the GHC Dashboard</h2>
          <p>This is a basic user dashboard layout using React and Tailwind CSS.</p>
        </main>
      </div>

      <footer className="bg-gray-800 p-4 text-white text-center">
        GHC Dashboard © 2024
      </footer>
    </div>
  );
}

export default App;
