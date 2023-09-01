import { ChatOpenAI } from 'langchain/chat_models/openai'
import { HumanMessage } from 'langchain/schema'
import { OPENAI_API_KEY } from '$env/static/private'

const llm = new ChatOpenAI({ openAIApiKey: OPENAI_API_KEY })

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData()
		const message = data.get('message')
		const response = await llm.predictMessages([new HumanMessage(message)])
		console.log(response)
	}
}
