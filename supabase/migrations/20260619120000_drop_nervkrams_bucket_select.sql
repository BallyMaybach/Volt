-- Drop the broad SELECT policy on the public nervkrams-uploads bucket.
-- Public URLs from storage.getPublicUrl() keep working because the bucket
-- is public. This only removes the ability for anonymous clients to call
-- the list API and enumerate every uploaded file.
--
-- IMPORTANT: adjust the policy name below if `supabase db execute` shows
-- a different policyname for the SELECT policy on storage.objects.

drop policy if exists "public read nervkrams" on storage.objects;
