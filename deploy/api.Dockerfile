FROM node:22-alpine AS build
WORKDIR /app
COPY package.json ./
COPY apps/api/package.json apps/api/package.json
COPY apps/web/package.json apps/web/package.json
RUN npm install --include=dev
COPY . .
RUN npm run db:generate && npm run build --workspace @ngaydoi/api

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -S ngaydoi && adduser -S ngaydoi -G ngaydoi
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/apps/api/package.json ./apps/api/package.json
COPY --from=build /app/apps/api/dist ./apps/api/dist
COPY --from=build /app/apps/api/prisma ./apps/api/prisma
COPY --from=build /app/apps/api/prisma.config.ts ./apps/api/prisma.config.ts
USER ngaydoi
EXPOSE 4000
CMD ["sh", "-c", "npm run prisma:deploy --workspace @ngaydoi/api && node apps/api/dist/main.js"]
