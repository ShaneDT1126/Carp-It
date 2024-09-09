import React, { useState } from 'react';
import { MessageCircle, Minimize2, Maximize2, X } from 'lucide-react';

const CarpItChat = () => {  
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
  
    return (
      <div className="fixed bottom-4 right-4 flex flex-col items-end">
        {isOpen && !isMinimized && (
          <div className="bg-white rounded-lg shadow-lg w-80 h-96 mb-4 flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold">Chat Assistant</h3>
              <div className="flex space-x-2">
                <button onClick={() => setIsMinimized(true)}>
                  <Minimize2 size={18} />
                </button>
                <button onClick={() => setIsOpen(false)}>
                  <X size={18} />
                </button>
              </div>
            </div>
            <div className="flex-grow p-4 overflow-y-auto">
              {/* Chat messages would go here */}
            </div>
            <div className="p-4 border-t">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        )}
        {isMinimized && (
          <button
            onClick={() => setIsMinimized(false)}
            className="bg-blue-500 text-white p-2 rounded-full mb-4"
          >
            <Maximize2 size={24} />
          </button>
        )}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-500 text-white p-4 rounded-full"
          >
            <MessageCircle size={24} />
          </button>
        )}
      </div>
    );
  };

export default CarpItChat;