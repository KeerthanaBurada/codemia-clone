const API_URL = "/api/chat";

export async function analyzeWithAI(diagram) {
  const prompt = `
You are an expert System Design interviewer.

Analyze this architecture:

${JSON.stringify(diagram, null, 2)}

Give:
1. Components Found
2. Missing Components
3. Scalability Concerns
4. Suggestions

Keep the answer concise.
`;

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "meta/llama-3.3-70b-instruct",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 512,
    }),
  });

  const data = await response.json();

  console.log(data);

  if (!response.ok) {
    throw new Error("NVIDIA API Error");
  }

  return data.choices[0].message.content;
}
