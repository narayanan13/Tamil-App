import React, { useState } from "react";
import axios from "axios";

export default function TamilForm() {
  const [name, setName] = useState("");

  const handleThanglishChange = async (e) => {
    const thanglish = e.target.value;
    setName(thanglish);

    if (thanglish.trim()) {
      try {
        const res = await axios.get(
          `https://inputtools.google.com/request?text=${encodeURIComponent(thanglish)}&itc=ta-t-i0-und&num=1`
        );
        const tamilWord = res.data[1][0][1][0]; // Extract Tamil suggestion
        setName(tamilWord);
      } catch (error) {
        console.error("Transliteration error:", error);
      }
    }
  };

  return (
    <div>
      <label>பெயர்:</label>
      <input
        type="text"
        value={name}
        onChange={handleThanglishChange}
        placeholder="Thanglish type here..."
      />
    </div>
  );
}
