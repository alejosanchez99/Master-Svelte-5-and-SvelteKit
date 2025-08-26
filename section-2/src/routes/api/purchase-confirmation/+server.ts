import { json } from "@sveltejs/kit";

export const POST = async ({ request }) => {
  const requestBody = await request.json();
  console.log(requestBody);

  return json({ message: "All good" });
};
