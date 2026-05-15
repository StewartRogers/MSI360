/**
 * Ordered screen identifiers used by the single-page app state machine.
 *
 * The app does not use a router in this prototype. `App.tsx` switches on these
 * values to render onboarding, dynamic assessment, scoring, report download,
 * and wrap-up screens.
 */
export type StepId =
  | "intro"
  | "language"
  | "role"
  | "time_in_role"
  | "description"
  | "task_description"
  | "height"
  | "assessment"
  | "score"
  | "email"
  | "report"
  | "submit"
  | "complete";

/**
 * Visual tone variants supported by the shared header.
 */
export type HeaderTone = "blue" | "white";

/**
 * Tabs shown in the report wrap-up header.
 */
export type WrapTab = "email" | "review" | "submit";
