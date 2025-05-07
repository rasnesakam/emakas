FROM node:18-alpine AS base
LABEL authors="emakas"

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:18-alpine AS production
LABEL authors="emakas"

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/package.json ./package.json

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Next.js uygulamasını çalıştırmak için kullanıcı oluştur (güvenlik için önerilir)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs -G nodejs

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
