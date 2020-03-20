FROM node:10
RUN apt-get update -y               \
    && apt-get install -y           \
    curl                            \
    git                             \
    nginx                           \
    gzip                            \
    htop                            \
    nano                            \
    netcat                          \
    rsync                           \
    sudo                            \
    ssh                             \
    tig                             \
    unzip                           \
    vim                             \
    wget                            \
    zip                             \
    --no-install-recommends         \
    && apt-get clean                \
    && rm -rf /var/lib/apt/lists/*  \
    && rm -rf /tmp/*                \
    && rm -rf /var/tmp/*

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

RUN sudo chown node:node /${HOME}/.bashrc
RUN sudo chown node:node /var/log/nginx/error.log
RUN sudo chown node:node /var/log/nginx/access.log
RUN echo "export NVM_DIR=$HOME/.nvm" >> ${HOME}/.bashrc
RUN sudo usermod -aG sudo node \
    && echo "%sudo ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

COPY ./entrypoint.sh /etc/entrypoint.sh
RUN sudo chmod +x /etc/entrypoint.sh

WORKDIR /home/node/app
USER node
CMD ["/bin/bash"]
ENTRYPOINT ["/etc/entrypoint.sh"]