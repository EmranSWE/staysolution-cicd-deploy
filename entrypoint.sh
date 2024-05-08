#!/bin/bash
npm run prisma:migrate
npm run prisma:generate
node dist/server.js