export const config = {
  runtime: "edge",
};

const NIM_API_URL = "https://integrate.api.nvidia.com/v1/chat/completions";

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({
        error: "Method not allowed",
      }),
      { status: 405 },
    );
  }

  try {
    const body = await req.json();

    const response = await fetch(NIM_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NVIDIA_API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: String(err),
      }),
      { status: 500 },
    );
  }
}
