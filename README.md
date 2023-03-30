# AI Keyword Extractor

This is a simple web application made using ReactJS and OpenAI API to extract the most relevant & important keywords from a given text input.

## Technologies Used
- ReactJS
- Chakra UI
- OpenAI API 
- Vite

## Links

Live Site URL: [https://ai-keyword-extractor-openai.vercel.app](https://ai-keyword-extractor-openai.vercel.app)

## Features
- Extracts keywords from text input using OpenAI's completions GPT-3 model (text-davinci-003).
- Show proper toast whenever required. Also added the copy to clipboard functionality.
- Displays the extracted keywords in a responsive and user-friendly way.

## How to use locally

To use AI Keyword Extractor, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal in the project directory.
3. Run `yarn install` to install the necessary dependencies.
4. Create a file named `.env` in the root directory of the project with the following content:
``` bash
VITE_OPENAI_API_KEY='<your OpenAI API key>'
VITE_OPENAI_API_URL='https://api.openai.com/v1/completions'
```
You can obtain your OpenAI API key by following the instructions [here](https://platform.openai.com/docs/api-reference/authentication)

5. Run `yarn run dev` to start the development server.
6. Open a web browser and go to http://localhost:3000.
7. Enter the text you want to extract keywords from and click the "Extract Keywords" button.
8. The extracted keywords will be displayed in Modal component.

## Screenshot & Video

![image1](https://user-images.githubusercontent.com/54253848/228853396-25d2af0a-1a35-42f3-a7e7-6cd064f1e2e7.png)

![image](https://user-images.githubusercontent.com/54253848/228853778-d2eb6352-985f-48a9-ac1c-443e915b267c.png)

https://user-images.githubusercontent.com/54253848/228855328-247eb400-cac1-44dd-877e-d3d25077edf4.mp4

