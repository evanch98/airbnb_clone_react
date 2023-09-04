# airbnb_clone_react

Start Date: 8<sup>th</sup> May 2023<br>
An Airbnb clone web application.

> **Warning**<br>
> Please do not use your actual email address when you test the demo website.

# Goals

- To showcase my knowledge of React, TypeScript, NextJs, and Tailwind CSS
- To build an Airbnb clone website
- To utilize Clean Architecture
- To leverage the power of Next.js 13 App Router in the web application

# Key Features

- Core Airbnb features
- Email Login, GitHub Login, and Google Login
- MongoDB for data persistence
- NextAuth authentication
- Next.js 13 App Router

# Testing the Project

To test the project, download the zip file and open it in the editor of your choice.
Then, run `npm install` in the terminal to install the dependencies.

```bash
npm install
```

After installing the required dependencies, you will have to create a `.env` file at the root of your project folder.
The required environment variable is as follows.

```text
DATABASE_URL=
NEXTAUTH_SECRET=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

Follow the steps from the official documentation for [NextAuth](https://next-auth.js.org/getting-started/example), and [Cloudinary](https://cloudinary.com/documentation/how_to_integrate_cloudinary) to get the values for the enviroment variables.
After completing the above steps, run `npm run dev` to test the project.

```bash
npm run dev
```

If you do not want to go through all the troubles, you can always test the [demo website](https://rent-house-react-hopf81d0y-evanch98.vercel.app/) for this project.
