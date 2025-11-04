# Deploying to Vercel

## Quick Deploy Options

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   - If you haven't already, create a GitHub repository
   - Push your code to GitHub

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Create React App
   - Click "Deploy"

3. **That's it!** Your site will be live in minutes.

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to portfolio folder**
   ```bash
   cd portfolio
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - For production deployment, use `vercel --prod`

### Option 3: Deploy via GitHub Integration

1. Push your code to GitHub
2. Go to Vercel dashboard
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect and configure everything
6. Deploy!

## Important Notes

- **Resume File**: Make sure `resume283.pdf` (or your resume PDF) is in the `public/` folder for it to be accessible
- **Environment Variables**: If you need any, add them in Vercel dashboard under Project Settings
- **Custom Domain**: You can add a custom domain in Vercel project settings
- **Build Settings**: The `vercel.json` file is already configured for Create React App

## Build Command

Vercel will automatically run:
- Install: `npm install`
- Build: `npm run build`
- Output: `build/` directory

Your site will be live at: `https://your-project-name.vercel.app`
