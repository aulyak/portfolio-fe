# Direct SSG Deployment with Traefik (No Docker)

## 🚀 Serving Static Files Directly via Traefik

Yes! You can absolutely serve your SSG build directly via Traefik without Docker containers. This is actually simpler and more efficient.

## 📁 **Setup Steps**

### 1. Build Static Files Locally
```bash
# On your local machine or CI/CD
npm run generate

# This creates .output/public/ with all static files
```

### 2. Transfer Files to VPS
```bash
# Using rsync (recommended)
rsync -avz .output/public/ user@your-vps:/var/www/portfolio/

# Or using scp
scp -r .output/public/* user@your-vps:/var/www/portfolio/
```

### 3. Configure Traefik (Static Files)

Add this to your Traefik configuration:

#### Option A: File Provider (traefik.yml)
```yaml
# In your traefik.yml
providers:
  file:
    filename: /etc/traefik/dynamic.yml
    watch: true

# In dynamic.yml
http:
  routers:
    portfolio:
      rule: "Host(`itsinav.run`)"
      service: portfolio
      entrypoints:
        - websecure
      tls:
        certResolver: letsencrypt

  services:
    portfolio:
      loadBalancer:
        servers:
          - url: "http://localhost:8080"  # nginx serving static files

  middlewares:
    security-headers:
      headers:
        customRequestHeaders:
          X-Forwarded-Proto: "https"
        customResponseHeaders:
          X-Frame-Options: "SAMEORIGIN"
          X-Content-Type-Options: "nosniff"
```

#### Option B: Docker Labels (if using nginx container)
```yaml
# docker-compose.yml for just nginx (no build step)
services:
  portfolio-static:
    image: nginx:alpine
    volumes:
      - /var/www/portfolio:/usr/share/nginx/html:ro
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.portfolio.rule=Host(`itsinav.run`)"
      - "traefik.http.routers.portfolio.entrypoints=websecure"
      - "traefik.http.routers.portfolio.tls.certresolver=letsencrypt"
      - "traefik.http.services.portfolio.loadbalancer.server.port=80"
    networks:
      - web
```

### 4. Simple nginx Configuration
```nginx
# /etc/nginx/sites-available/portfolio
server {
    listen 8080;
    server_name localhost;
    root /var/www/portfolio;
    index index.html;
    
    # Handle SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Health check
    location /health {
        return 200 "OK";
        add_header Content-Type text/plain;
    }
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
```

## 🔄 **Deployment Workflow**

### Option 1: Manual Deployment
```bash
# 1. Build locally
npm run generate

# 2. Upload to VPS
rsync -avz .output/public/ user@vps:/var/www/portfolio/

# 3. Restart nginx (if needed)
sudo systemctl reload nginx
```

### Option 2: CI/CD with GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy Portfolio
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '22'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Generate static site
        run: npm run generate
        
      - name: Deploy to VPS
        run: |
          rsync -avz .output/public/ ${{ secrets.VPS_USER }}@${{ secrets.VPS_HOST }}:/var/www/portfolio/
```

## ✅ **Benefits of Direct Serving**

- **Simpler**: No Docker containers to manage
- **Faster**: No container overhead
- **Less resources**: Lower memory usage
- **Easy updates**: Just upload new files
- **Standard hosting**: Works with any web server

## 🆚 **Comparison**

| Approach | Pros | Cons |
|----------|------|------|
| **Direct Static** | Simple, fast, standard | Need to manage nginx |
| **Docker Static** | Containerized, portable | Container overhead |

Choose direct static serving if you want simplicity and maximum performance! 🚀
