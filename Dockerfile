# ---- Stage 1: Build ----
    FROM node:18-alpine AS builder
    WORKDIR /app
    COPY package*.json ./
    RUN npm ci
    COPY . .
    RUN npm run build
    
    # ---- Stage 2: Runtime ----
    FROM node:18-alpine
    WORKDIR /app
    ENV NODE_ENV=production
    COPY --from=builder /app/package*.json ./
    RUN npm ci --omit=dev
    COPY --from=builder /app/dist ./dist
    EXPOSE 8000
    CMD ["node", "dist/index.js"]
    