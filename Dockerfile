# ─────────────────────────────────────────────────────────────────
# ETAPA 1: Build
# ─────────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

# ─────────────────────────────────────────────────────────────────
# ETAPA 2: Runtime
# ─────────────────────────────────────────────────────────────────
FROM node:20-alpine AS runtime

# SOLUCIÓN: Usar la sintaxis correcta de Alpine (-S)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app

COPY --from=builder /app/src ./src
COPY --from=builder /app/node_modules ./node_modules

# Cambiar propietario y proteger
RUN chown -R appuser:appgroup /app
USER appuser

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:3000/health || exit 1
CMD ["node", "src/index.js"]