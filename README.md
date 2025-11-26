# Personal Website

A modern, responsive personal website built with HTML, CSS, and JavaScript, designed to be deployed on GitHub Pages.

## Features

- 🎨 Modern, clean design with beautiful gradients and animations
- 📱 Fully responsive layout that works on all devices
- ⚡ Smooth scrolling navigation
- 🎯 Interactive elements and hover effects
- 🚀 Fast loading with optimized code
- ♿ Accessible design following best practices

## Sections

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About**: Personal information and skills showcase
- **Projects**: Portfolio of your work with links to live demos and GitHub repos
- **Contact**: Ways for visitors to get in touch with you

## Getting Started

### 1. Customize Your Content

Before deploying, make sure to update the following in `index.html`:

- Replace "Your Name" with your actual name
- Update the email address in the contact section
- Add your real GitHub and LinkedIn URLs
- Customize the project descriptions and links
- Update the skills section with your actual skills

### 2. Deploy to GitHub Pages

#### Option A: Using GitHub Web Interface

1. **Create a new repository on GitHub:**
   - Go to [GitHub.com](https://github.com) and sign in
   - Click the "+" icon in the top right corner
   - Select "New repository"
   - Name your repository (e.g., `your-username.github.io` for a user site, or any name for a project site)
   - Make it public
   - Don't initialize with README (we already have files)

2. **Upload your files:**
   - Click "uploading an existing file"
   - Drag and drop your `index.html`, `styles.css`, and `script.js` files
   - Add a commit message like "Initial website upload"
   - Click "Commit changes"

3. **Enable GitHub Pages:**
   - Go to your repository settings (Settings tab)
   - Scroll down to the "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
   - Your site will be available at `https://your-username.github.io/repository-name`

#### Option B: Using Git Command Line

1. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Connect to GitHub:**
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages in repository settings** (same as Option A, step 3)

### 3. Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to your repository with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable "Enforce HTTPS" in your repository's Pages settings

## File Structure

```
your-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Customization Tips

### Colors
The website uses a blue color scheme. To change colors, update the CSS variables in `styles.css`:
- Primary blue: `#2563eb`
- Gradient colors in hero section
- Background colors for sections

### Content
- Update the hero section with your personal introduction
- Add your real projects with actual links
- Include your contact information
- Add a professional photo (replace the icon in the profile card)

### Styling
- Modify fonts by changing the Google Fonts import
- Adjust spacing and sizing in the CSS
- Add your own animations or effects

## Browser Support

This website works on all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance

The website is optimized for fast loading:
- Minimal external dependencies
- Optimized CSS and JavaScript
- Responsive images (when added)
- Clean, semantic HTML

## Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, consider submitting a pull request to help others!

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🚀**

If you need help with customization or deployment, feel free to reach out!
