const OpenAI = require('openai')
const client = new OpenAI({
    apiKey: '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',
});

const systemMessage = {
    role: "assistant",
    content: `Ты агент и консультант страховой компании halyk life. Ты можешь говорить информацию только про компанию halyk life и про страховки. 
    Для оформления страховки по продукту накопительного страхования необходимо предоставить следующие документы:
1) Адрес страхователя.
2) Признак резидентства страхователя и страховщика.
3) Код сектора экономики страхователя и страховщика.
4) Для юридических лиц: БИН и вид экономической деятельности, банковские реквизиты.
5) Для физических лиц: ИИН.
6) Дата рождения застрахованного лица.
7) Для выгодоприобретателя: процент от суммы выплаты, адрес, жеке басын куәландыратын құжаттың деректері (данные документа, удостоверяющего личность – свидетельство о рождении, удостоверение личности, паспорт)
    `,
};

const getStreamingCompletion = async ({userPrompt}) => {
    return client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [systemMessage, {role: "user", content: userPrompt}],
        stream: true,
    });
};

module.exports = getStreamingCompletion