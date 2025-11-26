# Supabase Setup Guide for Contact Form

## Overview

The contact form now stores all submissions in a Supabase database instead of using FormSubmit.

## Setup Steps

### 1. Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Wait for the project to be fully provisioned

### 2. Create the Database Table

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the SQL from `supabase-setup.sql`
4. Click **Run** to execute the SQL

This will create:
- `contact_submissions` table with all necessary fields
- Indexes for better query performance
- Row Level Security (RLS) policies
- A view for unread submissions

### 3. Get Your API Keys

1. In Supabase dashboard, go to **Settings** → **API**
2. Copy the following:
   - **Project URL**: `https://jimbjsgrhlaflmrjijxt.supabase.co` (already configured)
   - **anon/public key** or **service_role key** (this is your `SUPABASE_KEY`)

### 4. Environment Variables

**For Production (Vercel):**

✅ **Already Configured!** Since Supabase is connected to Vercel, the environment variables are automatically provided:
- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_ANON_KEY` - Your Supabase anon key

The code uses these standard environment variables from your Vercel-Supabase integration.

**For Local Development:**

Create a `.env.local` file in the root directory:

```env
SUPABASE_URL=https://jimbjsgrhlaflmrjijxt.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

You can get these values from your Supabase project: **Settings** → **API**

### 5. Install Dependencies

The `@supabase/supabase-js` package is already added to `package.json`. Run:

```bash
npm install
```

## Database Schema

The `contact_submissions` table has the following structure:

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key (auto-generated) |
| `name` | TEXT | Sender's name |
| `email` | TEXT | Sender's email |
| `subject` | TEXT | Message subject |
| `message` | TEXT | Message content |
| `created_at` | TIMESTAMPTZ | Submission timestamp |
| `read` | BOOLEAN | Whether message has been read (default: false) |
| `replied` | BOOLEAN | Whether message has been replied to (default: false) |

## Viewing Submissions

### Option 1: Supabase Dashboard

1. Go to your Supabase project
2. Navigate to **Table Editor**
3. Select `contact_submissions` table
4. View all submissions

### Option 2: SQL Query

Run this in the SQL Editor:

```sql
SELECT * FROM contact_submissions
ORDER BY created_at DESC;
```

### Option 3: Unread Messages View

```sql
SELECT * FROM unread_submissions;
```

## Security

- **Row Level Security (RLS)** is enabled
- Only INSERT operations are allowed for anonymous users
- All data is stored securely in Supabase
- The anon key is safe to use in client-side code (it's restricted by RLS policies)

## Future Enhancements

You can extend this setup to:
- Create an admin dashboard to view submissions
- Add email notifications when new submissions arrive
- Mark messages as read/replied
- Add filtering and search functionality
- Export submissions to CSV

## Troubleshooting

**Submissions not saving?**
- Check that environment variables are set correctly
- Verify the table was created successfully
- Check Supabase logs in the dashboard
- Ensure RLS policies are set up correctly

**Build errors?**
- Make sure `@supabase/supabase-js` is installed: `npm install`
- Verify environment variables are set in Vercel

**Can't see submissions?**
- Check the Supabase dashboard → Table Editor
- Verify the SQL was executed successfully
- Check RLS policies if you're trying to read from client-side

## Current Status

✅ Contact form integrated with Supabase  
✅ All submissions stored in database  
✅ Environment variables configured  
✅ Row Level Security enabled  

All contact form submissions are now stored in your Supabase database!

