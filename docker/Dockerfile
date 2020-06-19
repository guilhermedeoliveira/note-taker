FROM node:13

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copying wait-for-it script
COPY . ./wait-for-it.sh

# Building app
EXPOSE 3000

RUN apt-get update -y && apt-get install -y telnet

# Running the app
CMD ["/bin/bash"]