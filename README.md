# Resume Refine

Resume Refine is an AI-powered resume analysis application that provides comprehensive feedback and suggestions to help users improve their resumes. The application features a space-themed UI with unique animations and offers critiques on key areas like ATS compatibility, grammar, and content quality.

<img width="1470" height="956" alt="Screenshot 2025-08-10 at 6 10 21 PM" src="https://github.com/user-attachments/assets/6571abad-aeaa-4502-a603-37aedbf36b94" />
<img width="1470" height="956" alt="Screenshot 2025-08-10 at 6 10 29 PM" src="https://github.com/user-attachments/assets/442e1817-56a4-4ef5-a63a-d27690bc0c50" />
<img width="1470" height="956" alt="Screenshot 2025-08-10 at 6 10 36 PM" src="https://github.com/user-attachments/assets/b6e93897-b11c-434e-828d-55c4fce278c2" />
<img width="1470" height="956" alt="Screenshot 2025-08-10 at 6 10 45 PM" src="https://github.com/user-attachments/assets/9e8f6e37-340b-4bec-be55-f41486475c6c" />
<img width="1470" height="956" alt="Screenshot 2025-08-10 at 6 10 57 PM" src="https://github.com/user-attachments/assets/a76700c5-bb0d-4600-a6f3-7ac30f72fea6" />

## Features

* **AI-Powered Resume Analysis**: Uses the OpenAI GPT-4o model via the OpenRouter API to analyze resumes and provide a detailed breakdown of strengths and weaknesses.
* **Detailed Feedback Categories**: Generates scores and suggestions for:
    * **Grammar & Style**: Assesses writing quality and offers improvements.
    * **ATS Keywords**: Identifies missing keywords and suggests optimizations to improve compatibility with Applicant Tracking Systems.
    * **Formatting**: Evaluates the resume's visual structure and readability.
    * **Content Quality**: Provides feedback on quantifiable achievements and overall content strength.
    * **Skills & Experience**: Analyzes skills match and offers suggestions for documenting work experience effectively.
* **Trending Skills**: Recommends high-demand technical and soft skills to add to a resume, including relevance scores.
* **File Uploads**: Supports uploading PDF, DOC, DOCX, and TXT files with a drag-and-drop interface.
* **Demo Mode**: Automatically falls back to a demo analysis mode if the AI service is unavailable or an API key isn't configured, ensuring a functional user experience.
* **Space-Themed UI**: A unique, visually appealing user interface with custom "cosmic" components and animations like `GalaxyBackground`, `MagicBento`, and `CosmicProgress`.

## Technical Stack

The application is built with a modern full-stack architecture.

### Frontend
* **React**: For building the single-page application.
* **TypeScript**: Ensures type safety across the codebase.
* **Wouter**: A lightweight routing library for the client.
* **Tailwind CSS**: A utility-first CSS framework for rapid and consistent styling, complemented by `shadcn/ui` components built on top of `Radix UI` primitives.
* **TanStack Query**: Manages server state and caching for API requests.
* **Vite**: The build tool and development server, offering a fast developer experience.

### Backend
* **Express.js**: A Node.js framework for the REST API server.
* **TypeScript**: Used for a type-safe backend implementation.
* **Multer**: Handles multipart/form-data for file uploads.
* **Mammoth.js & pdf-parse**: Libraries for extracting text from DOCX, DOC, and PDF files.
* **OpenRouter**: Provides a unified API for accessing various AI models, including GPT-4o.

### Database
* **PostgreSQL**: The primary database for persistent storage, managed by Drizzle ORM.
* **Drizzle ORM**: A type-safe ORM for interacting with the database.
* **Zod**: Used for runtime validation of API schemas.

## Deployment

The application is designed to be deployed on platforms that support a full Node.js runtime environment, as the backend handles file processing and AI API calls.


## Getting Started

1.  **Clone the repository**.
2.  **Install dependencies**: Run `npm install` in the project root.
3.  **Set up environment variables**: Create a `.env` file and add your `OPENROUTER_API_KEY`.
4.  **Run in development**: `npm run dev` to start the client and server.
5.  **Build for production**: `npm run build` to compile the client and server code.
6.  **Start in production**: `npm run start` to serve the production build.


https://graceful-kangaroo-cf2ac8.netlify.app/
