export const speakText = async (text: string): Promise<void> => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 1;
      utterance.pitch = 1;
  
      return new Promise((resolve) => {
        utterance.onend = () => {
          resolve();
        };
        window.speechSynthesis.speak(utterance);
      });
    } else {
      console.error('Text-to-speech not supported in this browser');
      return Promise.resolve();
    }
};