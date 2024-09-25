import { GoogleGenerativeAI } from "@google/generative-ai";

const googleAI = new GoogleGenerativeAI(process.env.NEXT_GEMINI_API);
const geminiModel = googleAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const GenerateText = async (prompt) => {
    const result = await geminiModel.generateContent(prompt);
    return result.response.text();
}

export async function POST(req, res) {
    try {
        const { prompt, type } = await req.json()
        if (!prompt) Response.json({ message: "Prompt is required", success: false, }, { status: 400, });

        if (type == 'video') {
            console.log("Video Type");
        } else if (type == 'image') {
            console.log("Image Type");
        } else {
            return Response.json(
                { message: "Data Send Successfully", success: true, data: await GenerateText(prompt) },
                { status: 201, }
            )
        }
        return Response.json(
            { message: "Something Went Wrong or Server Error", success: false, data: '' },
            { status: 500, }
        );
    } catch (error) {
        // console.log("Error Type: ", error);
        return Response.json(
            { message: `Something Went Wrong or Server Error ${error}`, success: false, },
            { status: 400, }
        );
    }
}