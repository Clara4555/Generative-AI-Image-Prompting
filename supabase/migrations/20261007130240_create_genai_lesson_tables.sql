/*
# Generative AI Lesson — schema for Michael Oge (single-tenant, no auth)

This schema persists one student's progress through the Generative AI image-generation lesson.
No sign-in is required — this is a one-on-one tutoring tool, so data is intentionally shared/public
and policies use `TO anon, authenticated`.

1. New Tables
- `lesson_progress` — tracks the current section, completion state of each section, and timestamps.
  - `id` (uuid, primary key)
  - `student_name` (text, default 'Michael Oge')
  - `current_section` (int, default 1)
  - `completed_sections` (int[], default empty array)
  - `last_visited` (timestamptz, default now())
- `quiz_answers` — stores Michael's knowledge-check answers with correctness feedback.
  - `id` (uuid, primary key)
  - `question_id` (int)
  - `selected_answer` (text)
  - `is_correct` (boolean)
  - `answered_at` (timestamptz, default now())
- `challenge_work` — stores the mini-challenge prompts Michael builds and his evaluation notes.
  - `id` (uuid, primary key)
  - `challenge_key` (text)  -- e.g. 'mars_dog', 'underwater_classroom', 'creative_freedom', 'final_challenge'
  - `prompt_text` (text)
  - `evaluation_notes` (text)
  - `improvement_note` (text)
  - `image_url` (text)  -- optional: pasted URL of generated image
  - `created_at` (timestamptz, default now())
- `reflection_answers` — stores Michael's reflection responses.
  - `id` (uuid, primary key)
  - `prompt_key` (text)
  - `answer_text` (text)
  - `created_at` (timestamptz, default now())
- `takehome_assignments` — stores the five take-home challenge submissions and iteration notes.
  - `id` (uuid, primary key)
  - `image_number` (int)  -- 1 through 5
  - `category` (text)    -- challenge name
  - `vague_prompt` (text)
  - `initial_prompt` (text)
  - `image_url` (text)
  - `ai_did_well` (text)
  - `ai_got_wrong` (text)
  - `revised_prompt` (text)
  - `improved_image_url` (text)
  - `comparison` (text)
  - `reflection` (text)
  - `created_at` (timestamptz, default now())

2. Security
- RLS enabled on all tables.
- All tables use `TO anon, authenticated` with `USING (true)` / `WITH CHECK (true)` because this
  is a single-tenant educational tool with no sign-in — the data is intentionally public/shared.
*/

CREATE TABLE IF NOT EXISTS lesson_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL DEFAULT 'Michael Oge',
  current_section int NOT NULL DEFAULT 1,
  completed_sections int[] NOT NULL DEFAULT '{}',
  last_visited timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE lesson_progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_lesson_progress" ON lesson_progress;
CREATE POLICY "anon_select_lesson_progress" ON lesson_progress FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_lesson_progress" ON lesson_progress;
CREATE POLICY "anon_insert_lesson_progress" ON lesson_progress FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_lesson_progress" ON lesson_progress;
CREATE POLICY "anon_update_lesson_progress" ON lesson_progress FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_lesson_progress" ON lesson_progress;
CREATE POLICY "anon_delete_lesson_progress" ON lesson_progress FOR DELETE
TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS quiz_answers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id int NOT NULL,
  selected_answer text NOT NULL,
  is_correct boolean NOT NULL,
  answered_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE quiz_answers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_quiz_answers" ON quiz_answers;
CREATE POLICY "anon_select_quiz_answers" ON quiz_answers FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_quiz_answers" ON quiz_answers;
CREATE POLICY "anon_insert_quiz_answers" ON quiz_answers FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_quiz_answers" ON quiz_answers;
CREATE POLICY "anon_delete_quiz_answers" ON quiz_answers FOR DELETE
TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS challenge_work (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  challenge_key text NOT NULL,
  prompt_text text,
  evaluation_notes text,
  improvement_note text,
  image_url text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE challenge_work ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_challenge_work" ON challenge_work;
CREATE POLICY "anon_select_challenge_work" ON challenge_work FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_challenge_work" ON challenge_work;
CREATE POLICY "anon_insert_challenge_work" ON challenge_work FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_challenge_work" ON challenge_work;
CREATE POLICY "anon_update_challenge_work" ON challenge_work FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_challenge_work" ON challenge_work;
CREATE POLICY "anon_delete_challenge_work" ON challenge_work FOR DELETE
TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS reflection_answers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  prompt_key text NOT NULL,
  answer_text text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE reflection_answers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_reflection_answers" ON reflection_answers;
CREATE POLICY "anon_select_reflection_answers" ON reflection_answers FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_reflection_answers" ON reflection_answers;
CREATE POLICY "anon_insert_reflection_answers" ON reflection_answers FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_reflection_answers" ON reflection_answers;
CREATE POLICY "anon_delete_reflection_answers" ON reflection_answers FOR DELETE
TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS takehome_assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_number int NOT NULL,
  category text NOT NULL,
  vague_prompt text,
  initial_prompt text,
  image_url text,
  ai_did_well text,
  ai_got_wrong text,
  revised_prompt text,
  improved_image_url text,
  comparison text,
  reflection text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE takehome_assignments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_takehome" ON takehome_assignments;
CREATE POLICY "anon_select_takehome" ON takehome_assignments FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_takehome" ON takehome_assignments;
CREATE POLICY "anon_insert_takehome" ON takehome_assignments FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_takehome" ON takehome_assignments;
CREATE POLICY "anon_update_takehome" ON takehome_assignments FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_takehome" ON takehome_assignments;
CREATE POLICY "anon_delete_takehome" ON takehome_assignments FOR DELETE
TO anon, authenticated USING (true);
