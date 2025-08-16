import { useState, useCallback } from "react";

export function useTransliterate(initial = "") {
  const [text, setText] = useState(initial);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = useCallback(async (input) => {
    setText(input);

    if (!input) {
      setSuggestions([]);
      return;
    }

    try {
      const res = await fetch(
        `https://inputtools.google.com/request?itc=ta-t-i0-und&num=5&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage&t=${encodeURIComponent(
          input
        )}`
      );

      const data = await res.json();

      if (data[0] === "SUCCESS" && data[1]?.[0]?.[1]) {
        setSuggestions(data[1][0][1]);
      } else {
        setSuggestions([]);
      }
    } catch (err) {
      console.error("Transliteration error:", err);
      setSuggestions([]);
    }
  }, []);

  return { text, setText, suggestions, handleChange };
}
