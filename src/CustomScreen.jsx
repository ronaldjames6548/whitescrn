import React, { useState } from 'react';

export default function CustomScreen() {
  const [bgColor, setBgColor] = useState('#000000');
  const [textColor, setTextColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(24);
  const [textContent, setTextContent] = useState('Sample Text');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const enterFullscreen = () => {
    const elem = document.getElementById('preview-screen');
    if (elem) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
      setIsFullscreen(true);
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsFullscreen(false);
  };

  React.useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Preview Section */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Preview</h3>
            <div
              id="preview-screen"
              className="w-full h-64 sm:h-80 lg:h-96 rounded-lg relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md"
              style={{ backgroundColor: bgColor }}
              onClick={!isFullscreen ? enterFullscreen : undefined}
            >
              {/* Top Left Decorative Lines */}
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-col space-y-1">
                <div
                  className="w-6 sm:w-8 h-0.5 rounded-full opacity-40"
                  style={{ backgroundColor: textColor }}
                ></div>
                <div
                  className="w-4 sm:w-6 h-0.5 rounded-full opacity-30"
                  style={{ backgroundColor: textColor }}
                ></div>
                <div
                  className="w-3 sm:w-4 h-0.5 rounded-full opacity-20"
                  style={{ backgroundColor: textColor }}
                ></div>
              </div>

              {/* Bottom Right Decorative Lines */}
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex space-x-1">
                <div
                  className="w-0.5 h-6 sm:h-8 rounded-full opacity-40"
                  style={{ backgroundColor: textColor }}
                ></div>
                <div
                  className="w-0.5 h-4 sm:h-6 rounded-full opacity-30"
                  style={{ backgroundColor: textColor }}
                ></div>
                <div
                  className="w-0.5 h-3 sm:h-4 rounded-full opacity-20"
                  style={{ backgroundColor: textColor }}
                ></div>
              </div>

              {/* Center Text Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="text-center px-4 break-words max-w-full"
                  style={{
                    color: textColor,
                    fontSize: `${fontSize}px`,
                    lineHeight: '1.5'
                  }}
                >
                  {textContent}
                </div>
              </div>

              {/* Fullscreen Toggle Button */}
              <div className="absolute top-2 right-2">
                <button
                  title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                  onClick={(e) => {
                    e.stopPropagation();
                    isFullscreen ? exitFullscreen() : enterFullscreen();
                  }}
                  className="text-xs opacity-60 hover:opacity-100 bg-black bg-opacity-30 text-white p-1 rounded transition-opacity"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={isFullscreen 
                        ? "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M15 9h4.5M15 9V4.5M15 9l5.25-5.25M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                        : "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      }
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Settings Section */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Settings</h3>

            {/* Color Pickers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Background Color
                </label>
                <input
                  className="w-full h-10 sm:h-12 rounded border border-gray-300 cursor-pointer"
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Text Color
                </label>
                <input
                  className="w-full h-10 sm:h-12 rounded border border-gray-300 cursor-pointer"
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                />
              </div>
            </div>

            {/* Font Size Slider */}
            <div className="mb-4">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Font Size: {fontSize}px
              </label>
              <input
                min="12"
                max="72"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                type="range"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>12px</span>
                <span>72px</span>
              </div>
            </div>

            {/* Text Content Textarea */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Text Content
              </label>
              <textarea
                placeholder="Enter your custom text here..."
                rows="4"
                className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
              />
            </div>

            {/* Fullscreen Button */}
            <button
              onClick={isFullscreen ? exitFullscreen : enterFullscreen}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 sm:py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isFullscreen 
                    ? "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M15 9h4.5M15 9V4.5M15 9l5.25-5.25M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                    : "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  }
                />
              </svg>
              <span>{isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
