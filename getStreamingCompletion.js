import OpenAI from "openai";

const client = new OpenAI({
    apiKey: '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',
});

const systemMessage = {
    role: "assistant",
    content: "",
};

export const getStreamingCompletion = async ({ userPrompt }) => {
    return client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [systemMessage, { role: "user", content: userPrompt }],
        stream: true,
    });
};