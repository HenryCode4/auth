Nextjs Backend test task

Key Features:

🔐 Next-auth v5 (Auth.js)
🚀 Next.js 14 with server actions
🔑 Credentials Provider
🌐 OAuth Provider (Social login with Google & GitHub)
👥 User roles (Admin & User)
🔓 Login component (Opens in redirect or modal)
📝 Register component
⚠️ Error component
🔘 Login button
🚪 Logout button
🔍 Exploring next.js middleware
📈 Extending & Exploring next-auth session
🔄 Exploring next-auth callbacks
👤 useCurrentUser hook
🛂 useRole hook


-------------------------------------------------------------------------------------

Prerequisites
Node version 18.7.x

Cloning the repository

-------------------------------------------------------------------------------------

Install packages
npm i


-------------------------------------------------------------------------------------

Setup .env file

DATABASE_URL=
DIRECT_URL=

AUTH_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

RESEND_API_KEY=

NEXT_PUBLIC_APP_URL=


-------------------------------------------------------------------------------------

Setup Prisma:

npm i --save -dev prisma prisma@latest
npm i @prisma/client@latest
npx prisma generate
npx prisma db push


-------------------------------------------------------------------------------------

Start the app:
npm run dev


