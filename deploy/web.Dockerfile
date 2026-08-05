FROM node:22-alpine AS build
WORKDIR /app
ARG NEXT_PUBLIC_API_URL=/api
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
COPY package.json ./
COPY apps/api/package.json apps/api/package.json
COPY apps/web/package.json apps/web/package.json
RUN npm install --include=dev
COPY . .
RUN npm run build --workspace @ngaydoi/web

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -S ngaydoi && adduser -S ngaydoi -G ngaydoi
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/apps/web/package.json ./apps/web/package.json
COPY --from=build /app/apps/web/.next ./apps/web/.next
COPY --from=build /app/apps/web/public ./apps/web/public
USER ngaydoi
EXPOSE 3000
CMD ["npm", "run", "start", "--workspace", "@ngaydoi/web"]
