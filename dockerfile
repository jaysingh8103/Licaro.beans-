# Use the official Node.js image as the base
FROM node:20

# Install Bun (version 1.0.0 is used here as an example)
RUN curl -fsSL https://bun.sh/install | bash

# Set the PATH for Bun so it's accessible globally
ENV PATH="/root/.bun/bin:$PATH"

# Set the working directory inside the container
WORKDIR /myapp

# Copy the package.json and bun.lockb first to leverage Docker cache
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application files
COPY . .

# Expose the port (optional, if you have a specific port)
EXPOSE 5173

# Run the application using Bun
CMD ["bun", "dev"]
