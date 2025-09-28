### AI Integration To-Do List

This roadmap outlines the step-by-step process for enhancing ReviewDotCom with AI, focusing on user experience, platform integrity, and deep insights.

---

### 📌 Phase 1: Foundational Setup & AI-Powered Summaries

**Goal:** Deliver immediate, high-impact value to users by providing concise summaries of all reviews for a business. This is the quickest win and a great introduction to AI on the platform.

*   **[ ] Task 1: Backend - Create AI Service Layer:**
    *   Set up the `@google/genai` SDK.
    *   Create a dedicated service module (e.g., `aiService.ts`) to centralize all calls to the Gemini API. This will abstract the logic and make it reusable.

*   **[ ] Task 2: Backend - Develop Summarization Endpoint:**
    *   Create a new API endpoint: `GET /api/business/:id/summary`.
    *   When called, this endpoint will:
        1.  Fetch all reviews for the specified business ID.
        2.  Format the review texts into a clear prompt for the `gemini-2.5-flash` model. (e.g., "Summarize the key positive and negative points from the following customer reviews: [review text 1], [review text 2], ...").
        3.  Call the Gemini API and return the generated text summary.

*   **[ ] Task 3: Frontend - Create `AISummary` Component:**
    *   Build a new React component (`components/AISummary.tsx`).
    *   This component will display the summary text, clearly labeled with a title like "AI-Powered Summary" and a small icon.
    *   It must handle loading and error states gracefully.

*   **[ ] Task 4: Frontend - Integrate into Business Page:**
    *   On `pages/BusinessPage.tsx`, fetch data from the new `/summary` endpoint when the page loads.
    *   Render the `AISummary` component in a prominent location, such as directly below the business name and star rating.

---

### 📌 Phase 2: Enhancing Trust with AI-Powered Moderation

**Goal:** Improve platform integrity and reduce moderator workload by using AI to automatically flag inappropriate content *before* it goes public.

*   **[ ] Task 1: Backend - Update `addReview` Logic:**
    *   Modify the `addReview` function in the mock API.
    *   Before saving a new review, send its text to the AI service.

*   **[ ] Task 2: Backend - Engineer a Moderation Prompt:**
    *   Create a system instruction for Gemini that asks it to check for policy violations (e.g., hate speech, spam, personal information, off-topic content).
    *   The prompt should request a structured JSON output, like `{ "isSafe": boolean, "reason": "Contains profanity" }`.

*   **[ ] Task 3: Backend - Implement Auto-Flagging:**
    *   If the AI returns `isSafe: false`, the review's status in the database should be set to `reported` instead of `active`.
    *   The `reason` from the AI should be stored with the report for the admin to see.

*   **[ ] Task 4: Frontend - Enhance Admin Panel:**
    *   Update `pages/AdminPage.tsx` and `components/AdminReviewCard.tsx`.
    *   The admin panel should now display reviews flagged by the AI.
    *   The `AdminReviewCard` must show the AI's reason for flagging to help the human moderator make a faster, more informed decision.

---

### 📌 Phase 3: Revolutionizing Discovery with Conversational Search

**Goal:** Move beyond simple keyword search to a natural, intent-based search experience that provides more relevant results.

*   **[ ] Task 1: Backend - Create "Search Intent" Endpoint:**
    *   Develop a new endpoint: `POST /api/ai-search`.
    *   This endpoint will receive a natural language query from the user (e.g., "find a good place for lunch in Abuja that isn't too expensive").

*   **[ ] Task 2: Backend - Deconstruct Query with AI:**
    *   Send the user's query to Gemini with a prompt designed to extract structured search criteria.
    *   The prompt should ask for a JSON object like `{ "category": "Eatery", "city": "Abuja", "keywords": ["lunch", "good value", "not expensive"] }`.

*   **[ ] Task 3: Backend - Execute Intelligent Search:**
    *   Use the structured data from the AI to perform a more targeted search. This will involve filtering by category/city and performing a full-text search on review content for the extracted keywords.

*   **[ ] Task 4: Frontend - Overhaul Homepage Search Bar:**
    *   Update `pages/HomePage.tsx`.
    *   The main search input should now call the new `/api/ai-search` endpoint.
    *   The UI should display the search results, perhaps with a small message explaining how the AI interpreted the query (e.g., "Showing affordable eateries for lunch in Abuja...").

---

### 📌 Phase 4: Providing Deeper Insights with Sentiment Analysis

**Goal:** Give users an at-a-glance understanding of the overall sentiment for a business, beyond just the star rating.

*   **[ ] Task 1: Backend - Create Sentiment Analysis Endpoint:**
    *   Create a new endpoint: `GET /api/business/:id/sentiment`.
    *   This will fetch all reviews and send their text to Gemini, asking it to classify each as "Positive," "Negative," or "Neutral."
    *   The endpoint will then aggregate these classifications into percentages and return them.

*   **[ ] Task 2: Frontend - Build `SentimentChart` Component:**
    *   Create a new component (`components/SentimentChart.tsx`) to visualize the sentiment data, for example, using a simple color-coded bar chart.

*   **[ ] Task 3: Frontend - Integrate into Business Page:**
    *   On `pages/BusinessPage.tsx`, fetch the sentiment data.
    *   Render the `SentimentChart` component in the sidebar or near the other rating information to provide a quick visual summary.
