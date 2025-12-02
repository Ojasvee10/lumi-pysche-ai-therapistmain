# Detailed Installation Guide for LUMIPSYCHE

## Step 1: Prerequisites

Before installing, ensure you have:

- **Node.js 18.0.0 or higher** - [Download](https://nodejs.org/en/download/)
- **npm 9.0.0 or higher** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/downloads)
- A code editor like VS Code - [Download](https://code.visualstudio.com/)

### Verify Installation

Open terminal/command prompt and check versions:

\`\`\`bash
node --version    # Should be v18.0.0 or higher
npm --version     # Should be 9.0.0 or higher
git --version     # Should be 2.0.0 or higher
\`\`\`

## Step 2: Clone the Repository

\`\`\`bash
# Option 1: Using Git
git clone https://github.com/yourusername/lumipsyche.git

# Option 2: Download ZIP from GitHub
# Extract the ZIP file to your desired location
\`\`\`

Navigate to the project directory:

\`\`\`bash
cd lumipsyche
\`\`\`

## Step 3: Install Dependencies

\`\`\`bash
npm install
\`\`\`

This will install all required packages listed in `package.json`.

**Alternative package managers:**

\`\`\`bash
# Using yarn
yarn install

# Using pnpm
pnpm install
\`\`\`

## Step 4: Run Development Server

Start the development server:

\`\`\`bash
npm run dev
\`\`\`

You should see:
\`\`\`
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
\`\`\`

## Step 5: Open in Browser

Open your web browser and go to:

\`\`\`
http://localhost:3000
\`\`\`

You should now see the LUMIPSYCHE app!

## Step 6: Stop the Development Server

To stop the server, press `Ctrl+C` in the terminal.

## Common Issues & Solutions

### Issue: `npm: command not found`
**Solution**: Install Node.js from https://nodejs.org/

### Issue: `Port 3000 already in use`
**Solution**: Use a different port:
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Issue: `Module not found` errors
**Solution**: Clear node_modules and reinstall:
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Issue: `EACCES: permission denied`
**Solution**: Fix npm permissions:
\`\`\`bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
\`\`\`

## Building for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

This creates an optimized production build in the `.next` folder.

## VS Code Setup (Recommended)

1. **Install VS Code** - [Download](https://code.visualstudio.com/)

2. **Install Extensions**:
   - ES7+ React/Redux/React-Native snippets
   - TypeScript Vue Plugin
   - Tailwind CSS IntelliSense
   - Prettier
   - ESLint

3. **Open Project**:
   \`\`\`bash
   code .
   \`\`\`

4. **Format on Save** (Optional):
   - Press `Ctrl+,` (settings)
   - Search for "Format on Save"
   - Check the box

## Git Setup (For GitHub)

Initialize Git in your project:

\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Add remote repository
git remote add origin https://github.com/yourusername/lumipsyche.git

# Create initial commit
git add .
git commit -m "Initial commit"

# Push to GitHub
git branch -M main
git push -u origin main
\`\`\`

## Next Steps

- Read the [README.md](README.md) for feature overview
- Check [CONTRIBUTING.md](.github/CONTRIBUTING.md) to contribute
- Explore the code structure in the README
- Start developing!

## Need Help?

- Check GitHub Issues for common problems
- Open a new issue if you're stuck
- Email: support@lumipsyche.com

---

Happy coding! 🎉
