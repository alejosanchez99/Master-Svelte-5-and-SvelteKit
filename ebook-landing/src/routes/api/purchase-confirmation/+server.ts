import { json } from "@sveltejs/kit";

export const POST = async ({ request }) => {
  const requestBody = request.json();
  console.log(requestBody);

  return json({ success: true });
};
