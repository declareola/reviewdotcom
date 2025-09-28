# ReviewDotCom: AI Integration Roadmap

### Strategic Overview
Our AI strategy is to leverage the power of Google's Gemini models to enhance user trust, provide deep and actionable insights, and create a seamless, intelligent user experience. This roadmap outlines our phased approach to integrating AI into the core of the platform.

---

### ✅ Phase 1: Foundational Setup & AI-Powered Summaries

**Goal:** Deliver immediate, high-impact value to users by providing concise summaries of all reviews for a business.

*   **[x] Task 1: Backend - Create AI Service Layer:**
    *   Set up the `@google/genai` SDK.
    *   Created a dedicated service module (`aiService.ts`) to centralize all calls to the Gemini API.

*   **[x] Task 2: Backend - Develop Summarization Logic:**
    *   Created `summarizeReviews` function in `aiService.ts`.
    *   Formats review text into a clear prompt for the `gemini-2.5-flash` model.
    *   Calls the Gemini API and returns the generated text summary.

*   **[x] Task 3: Frontend - Create `AISummary` Component:**
    *   Built the `AISummary.tsx` component.
    *   Displays the summary text, clearly labeled with "AI Summary" and an icon.
    *   Handles loading and error states.

*   **[x] Task 4: Frontend - Integrate into Business Page:**
    *   `pages/BusinessPage.tsx` now fetches and renders the `AISummary` component prominently.

---

### ⏳ Phase 2: Enhancing Trust with AI-Powered Moderation

**Goal:** Improve platform integrity and reduce moderator workload by using AI to automatically flag inappropriate content *before* it goes public.

*   **[ ] Task 1: Backend - Update `addReview` Logic:**
    *   Modify the `addReview` function to call the AI service before saving a new review.

*   **[ ] Task 2: Backend - Engineer a Moderation Prompt:**
    *   Create a `checkReviewContent` function in the AI service.
    *   Use a system instruction for `gemini-2.5-flash` to check for policy violations (hate speech, spam, PII).
    *   **Technical Note:** Utilize `responseSchema` to request a structured JSON output, like `{ "isSafe": boolean, "reason": "Contains profanity" }`, for reliable processing.

*   **[ ] Task 3: Backend - Implement Auto-Flagging:**
    *   If the AI returns `isSafe: false`, the review's status should be set to `reported`.
    *   The `reason` from the AI should be stored with the report for the admin to see.

*   **[ ] Task 4: Frontend - Enhance Admin Panel:**
    *   Update `pages/AdminPage.tsx` and `components/AdminReviewCard.tsx`.
    *   The `AdminReviewCard` must display the AI's reason for flagging to help human moderators make faster, more informed decisions.

---

### ✅ Phase 3: Revolutionizing Discovery with Grounded Search

**Goal:** Move beyond simple keyword search to a natural, intent-based search that provides more relevant, up-to-date results using Google Search.

*   **[x] Task 1: Backend - Create "Search with Grounding" Function:**
    *   Developed `searchWithGrounding` in `aiService.ts`.
    *   Receives a natural language query from the user.

*   **[x] Task 2: Backend - Use Google Search Tool:**
    *   The function sends the query to `gemini-2.5-flash` with the `googleSearch` tool enabled.
    *   The prompt asks the model to provide a helpful answer based on current web results.

*   **[x] Task 3: Frontend - Display Grounded Results:**
    *   `pages/SearchResultsPage.tsx` now calls this function and displays the AI-generated text.
    *   **Compliance:** The `SourceCitations` component is used to display the `groundingChunks` (source URLs) as required by the terms of service.

---

### ⏳ Phase 4: AI-Powered Photo Analysis

**Goal:** Make reviews richer and easier to create by automatically analyzing and captioning user-uploaded photos.

*   **[ ] Task 1: Backend - Create Photo Analysis Function:**
    *   Create `analyzeReviewPhoto` in `aiService.ts`.
    *   The function will accept an image (as a base64 string).

*   **[ ] Task 2: Backend - Use Multimodal Prompting:**
    *   Send the image data along with a text prompt (e.g., "Describe this image concisely for a business review photo caption") to the `gemini-2.5-flash` model.

*   **[ ] Task 3: Frontend - Integrate into Review Creation:**
    *   Update `pages/CreateReviewPage.tsx` to allow image uploads.
    *   When an image is selected, call the `analyzeReviewPhoto` function.
    *   Display the AI-generated caption in a text input below the image, allowing the user to edit it before submission.

---

### 🚀 Phase 5: Proactive Business Intelligence (Future)

**Goal:** Transform the platform into a business intelligence tool by providing owners with AI-driven insights about their customer feedback.

*   **[ ] Task 1: Backend - Trend Analysis Endpoint:**
    *   Create an endpoint: `GET /api/business/:id/trends`.
    *   This will fetch all reviews over a time period (e.g., last 3 months).
    *   Send the reviews to Gemini with a prompt asking it to identify recurring themes, emerging issues, or common points of praise (e.g., "Analyze these reviews and identify the top 3 most frequently mentioned positive and negative topics.").

*   **[ ] Task 2: Frontend - Business Dashboard UI:**
    *   Design a new "Dashboard" section for verified business owners.
    *   Display the AI-generated trends in a clear, actionable format (e.g., "💡 Insight: 15 reviews in October mentioned 'slow service' on weekends.").

---

### Key Considerations

-   **Transparency:** Always clearly label content that is AI-generated (e.g., summaries, captions).
-   **Human-in-the-Loop:** AI moderation should supplement, not replace, human oversight. The admin panel is crucial.
-   **Privacy:** Ensure no personally identifiable information (PII) is inadvertently sent to the AI, especially from user reviews.
-   **Cost Management:** Monitor API usage to manage costs as the user base grows.
-   **Bias Mitigation:** Be aware of potential biases in AI models and review prompts to ensure fair and balanced outputs.
