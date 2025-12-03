FROM oven/bun:1

ARG PORT=3000
ENV PORT=${PORT}

WORKDIR /app
COPY . .
RUN bun install

EXPOSE ${PORT}

CMD ["bun", "run", "src/index.ts"]