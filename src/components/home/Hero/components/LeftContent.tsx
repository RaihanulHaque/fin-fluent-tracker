import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Download,
  Smartphone,
  Shield,
  TrendingUp,
  Star,
  Play,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const LeftContent = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLiveDemoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {t("hero.rating")}
          </span>
        </div>

        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          {t("hero.title")}
          <br />
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            {t("hero.titleHighlight")}
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          {t("hero.subtitle")}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <Download className="w-5 h-5 mr-2" />
          {t("hero.startTracking")}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={handleLiveDemoClick}
          className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900 px-8 py-6 text-lg font-semibold rounded-xl"
        >
          <Smartphone className="w-5 h-5 mr-2" />
          {t("hero.liveDemo")}
        </Button>
      </div>

      {/* <div className="flex items-center space-x-8 pt-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white">
            500K+
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {t("hero.stats.activeUsers")}
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white">
            4.9★
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {t("hero.stats.userRating")}
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white">
            AI
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {t("hero.stats.aiPowered")}
          </div>
        </div>
      </div> */}

      {/* Custom Live Demo Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleCloseModal}
          />

          {/* Modal Content */}
          <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-5xl h-[85vh] mx-4 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex-1 text-center">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t("hero.liveDemo")} - Hishab App
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Experience Hishab in action with our live demo video
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Video Content */}
            <div className="p-4 h-[calc(100%-80px)]">
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-black">
                <iframe
                  src="https://www.youtube.com/embed/DqvuARH3ulM?autoplay=1&mute=0&rel=0&controls=1&showinfo=0&modestbranding=1"
                  title="Hishab App Live Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftContent;
