export async function sendForm(
  title: string,
  fields: Record<string, string>,
): Promise<boolean> {
  try {
    const runtimeConfig = useRuntimeConfig();
    const url = runtimeConfig.public.sendApplicationEndpoint;

    let text = `<b>${title}</b>\n`;
    Object.entries(fields).forEach(([key, value]) => {
      text += `${key}: ${value}\n`;
    });

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ text }),
    });

    return response.ok;
  } catch (e) {
    return false;
  }
}
