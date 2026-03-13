

## Plan: Clickable Dashboard Cards + Real-Time Subscriptions

### 1. Clickable Metric Cards
Wrap each MetricCard in `Dashboard.tsx` with `Link` components:
- Total Employees → `/employees`
- Onboarding → `/onboarding`
- Notice Period → `/exit`
- Pending Tasks → `/tasks`

Add hover scale/shadow effect to MetricCard component.

### 2. Real-Time Supabase Subscriptions
Create a `src/hooks/useRealtimeSubscription.ts` hook that:
- Subscribes to `exit_dept_tasks`, `exit_clearance_forms`, `exit_document_uploads`, and `generated_documents` via `supabase.channel().on('postgres_changes', ...)`
- Invalidates relevant React Query cache keys on INSERT/UPDATE/DELETE
- Used in Dashboard to keep exit clearance data fresh

### 3. Exit Data Hook
Create `src/hooks/useExitData.ts`:
- Fetches `exit_clearance_forms` and `exit_dept_tasks` from Supabase via React Query
- Dashboard's Exit Clearance Progress widget reads from this hook (falling back to mock data if tables are empty)
- Real-time subscription auto-refreshes on changes

### Files Changed
- `src/components/shared/MetricCard.tsx` — add hover animation classes
- `src/pages/Dashboard.tsx` — wrap cards with `Link`, integrate real-time hook
- `src/hooks/useRealtimeSubscription.ts` — new, generic real-time channel hook
- `src/hooks/useExitData.ts` — new, fetch exit tables with React Query

