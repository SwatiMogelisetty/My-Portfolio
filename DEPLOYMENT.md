# Deployment Guide

This portfolio can be deployed to various platforms. Choose the one that best fits your needs.

## 🚀 Vercel (Recommended)

Vercel is the creator of Next.js and provides the best experience for deploying Next.js applications.

### Option 1: Git Integration (Easiest)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect Next.js and configure the build
6. Click "Deploy"

Your site will be live at `project-name.vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🌐 Other Platforms

### Netlify

```bash
# Build
npm run build

# Deploy
npm i -g netlify-cli
netlify deploy --prod --dir=.next
```

### AWS Amplify

1. Push to GitHub
2. Go to AWS Amplify Console
3. Click "New App" → "Host Web App"
4. Connect your GitHub repository
5. Build settings: Next.js will be auto-detected
6. Deploy

### Docker Deployment

```bash
# Build image
docker build -t swati-portfolio .

# Run locally
docker run -p 3000:3000 swati-portfolio

# Push to registry
docker tag swati-portfolio your-registry/swati-portfolio:latest
docker push your-registry/swati-portfolio:latest
```

### DigitalOcean

1. Create a Droplet (Ubuntu 20.04 LTS)
2. SSH into the droplet
3. Install Node.js:

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. Clone your repository:

```bash
git clone your-repo
cd portfolio
npm install
npm run build
npm start
```

5. Use PM2 to keep the app running:

```bash
npm i -g pm2
pm2 start npm --name "portfolio" -- start
pm2 startup
pm2 save
```

### Heroku

```bash
# Install Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Create app
heroku create your-portfolio-app

# Set buildpacks
heroku buildpacks:set heroku/nodejs

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

## 📦 Production Checklist

Before deploying to production, ensure:

- [ ] Update `src/app/layout.tsx` metadata with your information
- [ ] Replace placeholder links with your actual links
- [ ] Add your profile photo to `/public`
- [ ] Add your resume to `/public/resume.pdf`
- [ ] Update all content with your actual information
- [ ] Test the build locally: `npm run build && npm start`
- [ ] Test all forms and links
- [ ] Update Google Analytics ID if using GA
- [ ] Set up custom domain (if using cloud provider)
- [ ] Enable HTTPS/SSL certificate
- [ ] Test on mobile devices
- [ ] Verify SEO tags are correct
- [ ] Set up error tracking (optional)
- [ ] Configure email notifications for contact form

## 🔧 Custom Domain Setup

### For Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records (Vercel will provide instructions)
4. Verify domain

### For Other Providers

Update DNS records:
- A Record: Point to provider's IP
- CNAME Record: Point to provider's domain
- TXT Record: For SSL verification (if required)

## 📊 Monitoring

### Server Uptime Monitoring

- [Uptime Robot](https://uptimerobot.com) - Free uptime monitoring
- [Pingdom](https://www.pingdom.com) - Performance monitoring
- [StatusPage](https://www.statuspage.io) - Status page

### Analytics

Add Google Analytics:

1. Create a Google Analytics property
2. Get your Measurement ID
3. Update `src/app/layout.tsx`:

```tsx
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YOUR_ID');
    `,
  }}
/>
```

## 🔐 Security

- Vercel provides free HTTPS/SSL
- Keep dependencies updated: `npm audit fix`
- Use environment variables for sensitive data
- Enable CORS if needed
- Regular security scans

## 🚨 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Runtime Errors

```bash
# Check logs
npm start

# Check types
npm run type-check
```

### Performance Issues

- Optimize images (use next/image)
- Enable compression
- Use CDN caching
- Monitor with Lighthouse

## 📞 Support

If you encounter issues:

1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Review platform-specific docs
3. Check error logs
4. Clear cache and rebuild
5. Verify environment variables are set

---

Happy deploying! 🎉
