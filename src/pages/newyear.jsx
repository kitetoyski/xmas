import React, { useState, useEffect } from "react";
import { Button, Typography, Box, Modal } from "@mui/material";

const NewYear = () => {
  const [timeRemaining, setTimeRemaining] = useState(""); // State for countdown time
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // Button enabled after countdown
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal open
  const [typedMessage, setTypedMessage] = useState(""); // State for typed message

  useEffect(() => {
    // Set target date to January 1, 2025 in Philippine Time (UTC+8)
    const targetDate = new Date(2025, 0, 1, 0, 0, 0); // January 1, 2025

    // Adjust for Philippine Time
    const targetDatePHT = new Date(targetDate.getTime() - targetDate.getTimezoneOffset() * 60000 + 8 * 3600000);

    const updateCountdown = () => {
      const now = new Date();
      const nowPHT = new Date(now.getTime() - now.getTimezoneOffset() * 60000 + 8 * 3600000);
      const timeDiff = targetDatePHT - nowPHT;

      if (timeDiff <= 0) {
        setIsButtonEnabled(true);
        setTimeRemaining("00d 00h 00m 00s"); // Time reached zero
        clearInterval(interval);
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        setTimeRemaining(
          `${days}d ${hours.toString().padStart(2, "0")}h ${minutes
            .toString()
            .padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`
        );
      }
    };

    const interval = setInterval(updateCountdown, 1000); // Update countdown every second

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []); // Run only once when the component mounts

  const handleCelebrateClick = () => {
    setIsModalOpen(true);

    const message = "Hi Ga, Happy New Year! 🎉🎆 I know 2024 was a tough year for you, but here’s to a fresh start and brighter days ahead. Let’s welcome 2025 with open hearts, filled with joy, love, and endless possibilities. Cheers to creating more beautiful memories together this year! 🥂💖 Always remember that I got your back always. And will always be here to support you in everything! See you soon, palangga! 🥂💖"
    let index = 0;
    setTypedMessage(""); // Reset message to empty string to avoid old data

    const typeEffect = setInterval(() => {
      if (index < message.length) {
        setTypedMessage((prev) => prev + message.charAt(index));
        index++;
      } else {
        clearInterval(typeEffect);
      }
    }, 50); // Adjust typing speed
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Typography variant="h4">Countdown to 2025!</Typography>
      <Typography variant="h6">
        {timeRemaining || "Happy New Year 2025! 🎆"}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        disabled={!isButtonEnabled}
        onClick={handleCelebrateClick}
        sx={{ padding: "10px 20px", fontSize: "16px" }}
      >
        {isButtonEnabled ? "Celebrate New Year 2025!" : "Counting down to 2025..."}
      </Button>

      {/* Modal */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: 4,
            borderRadius: 2,
            boxShadow: 24,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            {typedMessage} {/* Display typed message correctly */}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCloseModal}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default NewYear;
