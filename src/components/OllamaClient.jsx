// Ollama Client class remains mostly the same but as a custom hook
const useOllamaClient = () => {
  const baseUrl = 'http://localhost:11434';
  const timeout = 30000;
  const decoder = new TextDecoder();

  const sendPrompt = async ({ prompt, model = 'llama3.2-vision', stream = true, temperature = 0.7 }, 
    onChunk = () => {}) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    console.log(prompt);
    try {
      const request = {
        model,
        messages: [{ role: 'user', content: prompt }],
        stream,
        temperature
      };
      console.log(JSON.stringify(request));
      const response = await fetch(`${baseUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
      }

      const reader = response.body?.getReader();
      let fullResponse = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (!line.trim()) continue;
          try {
            const parsed = JSON.parse(line);
            if (parsed.message?.content) {
              fullResponse += parsed.message.content;
              onChunk(parsed.message.content);
            }
          } catch (e) {
            console.warn('Error parsing chunk:', e);
          }
        }
      }

      return fullResponse;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  };

  return { sendPrompt };
};

export default useOllamaClient;