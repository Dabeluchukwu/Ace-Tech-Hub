'use client';

import { useState, useEffect } from 'react';
import { Download, X, Smartphone, Share2, Home, Check, ArrowRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function InstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);
  const [installStep, setInstallStep] = useState(1);

  useEffect(() => {
    // Check if already installed
    const isAppInstalled = window.navigator?.standalone || 
                           window.matchMedia('(display-mode: standalone)').matches;
    setIsInstalled(isAppInstalled);

    // Check device type
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);
    setIsAndroid(/Android/.test(navigator.userAgent));

    // Check if user has dismissed before
    const dismissed = localStorage.getItem('installPromptDismissed');
    if (dismissed) {
      setHasBeenDismissed(true);
      return;
    }

    // Show prompt after delay if not installed
    if (!isAppInstalled) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle Android install prompt
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      // Android - use the native prompt
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      if (result.outcome === 'accepted') {
        setShowPrompt(false);
        localStorage.setItem('installPromptDismissed', 'true');
      }
      setDeferredPrompt(null);
    } else if (isIOS) {
      // iOS - show instructions
      setShowIOSInstructions(true);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('installPromptDismissed', 'true');
    setHasBeenDismissed(true);
  };

  // Don't show if already installed or dismissed
  if (isInstalled || hasBeenDismissed || !showPrompt) return null;

  return (
    <>
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-50"
          >
            <div className="bg-[#0D1F3A] rounded-2xl shadow-2xl border border-white/10 p-5 relative overflow-hidden">
              {/* Decorative gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
              
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 flex-shrink-0">
                    <Download className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      Install ACE TECH HUB
                    </h4>
                    <p className="text-xs text-gray-400">
                      Get the app for a better experience
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleDismiss}
                  className="text-gray-400 hover:text-white transition-colors flex-shrink-0 -mt-1"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <button
                onClick={handleInstall}
                className="mt-3 w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-sm hover:opacity-90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-cyan-500/25"
              >
                {isIOS ? 'How to Install' : 'Install App'}
              </button>

              {/* Device indicator */}
              <div className="mt-2 flex items-center justify-center gap-1.5">
                <span className="text-[10px] text-gray-500">
                  {isIOS ? '📱 iOS' : isAndroid ? '📱 Android' : '📱 Web App'}
                </span>
                <span className="text-[10px] text-gray-600">•</span>
                <span className="text-[10px] text-gray-500">
                  {isIOS ? '2-step setup' : 'One-click install'}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* iOS Instructions Modal */}
      <AnimatePresence>
        {showIOSInstructions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowIOSInstructions(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#0D1F3A] rounded-2xl max-w-md w-full p-6 relative border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowIOSInstructions(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-cyan-500/10">
                  <Smartphone className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Install on iPhone
                  </h3>
                  <p className="text-sm text-gray-400">Add ACE TECH HUB to your home screen</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold border border-cyan-500/30">
                    1
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Tap the Share Button</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Tap the square with an arrow pointing up at the bottom of the screen
                    </p>
                    <div className="mt-2 p-2 bg-white/5 rounded-lg border border-white/5 inline-flex items-center gap-2">
                      <Share2 className="h-4 w-4 text-cyan-400" />
                      <span className="text-xs text-gray-400">Share icon</span>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold border border-cyan-500/30">
                    2
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Add to Home Screen</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Scroll down and tap <strong className="text-cyan-400">"Add to Home Screen"</strong>
                    </p>
                    <div className="mt-2 p-2 bg-white/5 rounded-lg border border-white/5 inline-flex items-center gap-2">
                      <Home className="h-4 w-4 text-cyan-400" />
                      <span className="text-xs text-gray-400">Add to Home Screen</span>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold border border-cyan-500/30">
                    3
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Tap Add</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Tap <strong className="text-cyan-400">"Add"</strong> in the top right corner
                    </p>
                    <div className="mt-2 p-2 bg-white/5 rounded-lg border border-white/5 inline-flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-xs text-gray-400">Confirm installation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="h-1 w-8 bg-cyan-500 rounded-full" />
                <div className="h-1 w-8 bg-white/20 rounded-full" />
                <div className="h-1 w-8 bg-white/20 rounded-full" />
              </div>

              <button
                onClick={() => setShowIOSInstructions(false)}
                className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                Got it! 
                <ArrowRight className="inline-block ml-2 h-4 w-4" />
              </button>

              <p className="mt-3 text-center text-[10px] text-gray-500">
                After installation, open ACE TECH HUB from your home screen
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Export a simple version without animations for fallback
export function SimpleInstallPrompt() {
  const [show, setShow] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const isAppInstalled = window.navigator?.standalone || 
                           window.matchMedia('(display-mode: standalone)').matches;
    setIsInstalled(isAppInstalled);

    const dismissed = localStorage.getItem('installPromptDismissed');
    if (!isAppInstalled && !dismissed) {
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (isInstalled || !show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-50">
      <div className="bg-[#0D1F3A] rounded-2xl shadow-2xl border border-white/10 p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-cyan-500/10 rounded-xl">
            <Download className="h-4 w-4 text-cyan-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">Install ACE TECH HUB</p>
            <p className="text-xs text-gray-400">Add to home screen</p>
          </div>
          <button
            onClick={() => {
              setShow(false);
              localStorage.setItem('installPromptDismissed', 'true');
            }}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}