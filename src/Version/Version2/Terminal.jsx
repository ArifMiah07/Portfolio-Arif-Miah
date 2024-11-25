import { useState } from "react";

const Terminal = () => {
  const [commands, setCommands] = useState([]);
  const [currentInput, setCurrentInput] = useState("");

  const handleCommand = (command) => {
    let response = "";
    switch (command) {
      case "help":
        response = "enter any command from here => $about, $stack, $projects, $contact ";
        break;
      case "about":
        response = "Hi, I am Arif Miah, a passionate web developer!";
        break;
      case "stack":
        response = "React, Node.js, Express, MongoDB, TailwindCSS";
        break;
      case "projects":
        response = "1. Portfolio Site  2. Chat App  3. E-commerce Platform";
        break;
      case "contact":
        response = "Email: arifmiah.me101gmail.com | GitHub: @ArifMiah07";
        break;
      default:
        response = `Command "${command}" not found. Type 'help' for available commands.`;
    }
    setCommands([...commands, { command, response }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentInput.trim()) {
      handleCommand(currentInput.trim());
      setCurrentInput("");
    }
  };

  return (
    <div className="bg-terminal text-green h-screen p-6 font-mono flex flex-col items-center">
      <div className="w-full max-w-4xl bg-black rounded-lg shadow-lg p-4">
        <header className="flex space-x-2 pb-2 mb-4 border-b border-gray-700">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </header>

        <div className="flex flex-col space-y-2 text-white">
          {commands.map((entry, index) => (
            <div key={index}>
              <span className="text-green">$ {entry.command}</span>
              <div>{entry.response}</div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-4">
          <span className="text-white">$ </span>
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            className="p-3 rounded-md bg-terminal text-green outline-none w-4/5"
            placeholder="Type a command..."
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
