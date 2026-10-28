This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## RSVP setup

RSVP confirmations are sent through a Vercel API route to a Google Apps Script web app. The script appends each response to a private Google Sheet and emails the configured recipient (it does not send a receipt to the guest). The form only shows a saved confirmation after the sheet write succeeds; if email delivery fails after saving, the page says so and the response remains in the sheet, with an option to retry the notification.

### Configure Google Sheets and Apps Script

1. Create a Google spreadsheet, keep its sharing restricted, and copy its spreadsheet ID from the URL.
2. Create a standalone Apps Script project at [script.google.com](https://script.google.com). Copy `scripts/apps-script-rsvp/Code.gs` into its `Code.gs` file.
3. In the Apps Script project, open **Project Settings → Script properties** and add:
   - `RSVP_SPREADSHEET_ID`: the spreadsheet ID.
   - `RSVP_NOTIFICATION_EMAIL`: the address that should receive RSVP notifications.
   - `RSVP_SHARED_SECRET`: a randomly generated secret with at least 32 bytes of entropy.
4. Select `authorizeRsvp` in the Apps Script editor and run it once, then approve the requested Sheets and email permissions.
5. Deploy the project as a **Web app**, executing as yourself and allowing access to anyone. The endpoint must be publicly reachable by Vercel; requests are authenticated with the shared secret. Copy the deployed URL ending in `/exec`.
6. In Vercel, add these environment variables for each environment where the site is deployed:
   - `APPS_SCRIPT_RSVP_URL`: the Apps Script `/exec` URL.
   - `APPS_SCRIPT_RSVP_SECRET`: the exact same secret as `RSVP_SHARED_SECRET`.
7. Redeploy after setting the Vercel variables. Submit a test RSVP and verify the row and notification email before sharing the site.

The script creates a tab named `RSVP` and adds its column headers on the first submission. If you change the Apps Script code later, create a new deployment version and update the URL in Vercel if it changes. The couple's notification is sent only after the row is saved; a failed email is marked `FAILED` in the sheet, and retrying the same form submission will try the notification again without adding a duplicate row.

Keep the spreadsheet private and never put the Apps Script URL or shared secret in client-side code or `NEXT_PUBLIC_*` variables. The hidden anti-spam field is a basic honeypot, not a full rate limiter.
