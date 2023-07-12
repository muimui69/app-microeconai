import { NextResponse } from "next/server";
import { Configuration ,OpenAIApi} from "openai";


const configuration = new Configuration({
    apiKey:process.env.OPENAI_API_KEY
})

if(!configuration.apiKey){
    throw new Error('OPENAI_API_KEY no esta definido');54
}

const openai = new OpenAIApi(configuration)

export async function GET(request){
    try {
        const response = await openai.createCompletion({
            prompt:'Dame un chiste de programador',
            model:'text-davinci-003',
            temperature:0.5,
            max_tokens:50
        })
        return NextResponse.json(response.data.choices[0].text);
    } catch (error) {
        return NextResponse.error(error,{
            status:500,
        })
    }
} 


