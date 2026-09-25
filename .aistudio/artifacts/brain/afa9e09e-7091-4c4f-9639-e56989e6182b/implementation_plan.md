# Implementation Plan - Legal Reference Precision & Audit

This plan focuses on ensuring terminology precision, conducting a full content audit of the Rules of Procedure and Evidence, and refining the monochrome UI for a high-quality reading experience.

## 1. Terminology Precision & Data Audit
*   **Terminology Lock**: Update all references to ensure "مادة" (Article) is strictly used for the Rome Statute and "قاعدة" (Rule) for the Rules of Procedure.
*   **Rules Audit**: Verify all 225 rules are present and complete in `rulesOfProcedureData.ts`.
*   **Cross-Reference Check**: Audit text for "المادة" within the Rules of Procedure to ensure they correctly reference Rome Statute articles (where appropriate) and don't mistakenly refer to rules as "articles".
*   **Glossary Alignment**: Ensure glossary terms match the legal terminology used in the documents.

## 2. UI/UX Refinement (Monochrome Museum Aesthetic)
*   **Dynamic Labels**: Update `RomeStatuteViewer.tsx` to dynamically display the correct label ("قاعدة" vs "مادة") in navigation (Previous/Next) and headers based on the current document.
*   **Typographic Hierarchy**:
    *   Use an elegant serif for titles and legal text headings.
    *   Constrain body text width to 65-75 characters for optimal legibility.
    *   Remove all "pill" boxes/chips for metadata (dates, categories) in favor of clean, unboxed text with typographic separators (`·`).
*   **Navigation & Search**:
    *   Fix the search bar to clearly distinguish between Article and Rule results.
    *   Enhance the table of contents for better mobile navigation.

## 3. Technical Enhancements & Persistence
*   **Search Optimization**: Improve the smart search logic to prioritize exact matches for Article/Rule numbers.
*   **Offline Support**: Ensure the PWA configuration is robust for offline reading of the legal texts.
*   **Metadata & SEO**: Implement proper SEO titles and OpenGraph tags using the `applet-seo` skill guidelines.

## 4. Verification & Quality Control
*   **Build & Lint**: Run `compile_applet` and `lint_applet` to ensure no syntax or type errors.
*   **Visual Audit**: Verify the monochrome theme adheres to the "No AI Slop" rules (no unsolicited gradients or rounded pills).
*   **Content Completeness**: Final manual check of Rule 225 to ensure no truncation.
