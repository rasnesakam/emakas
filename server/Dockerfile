FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./

# Install Dependencies
RUN npm install 
# For only production
# RUN npm ci --only=production

## Copy source codes inside working dir
COPY . .

# Bind 8080 port to this image
EXPOSE 8080

CMD ["node","index.js"]