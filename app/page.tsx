"use client";

import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import CompassPage from "./compass/page";
import CalibrationPage from "./calibration/page";
import SettingsPage from "./settings/page";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<string>("compass");

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === "compass" && <CompassPage />}
      {currentPage === "calibration" && <CalibrationPage />}
      {currentPage === "settings" && <SettingsPage />}
      <BottomNav currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}
