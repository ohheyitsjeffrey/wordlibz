# WordLibz

A mad libs style game powered by Wikipedia

Coming Soon

## Running Locally

Here are a variety of ways to run this locally, should you wish to do so.

### With Node.js Installed Locally / With nvm

If you have node.js installed and would like to just run it locally, there are no tricks to it, just 
run:

```
npm install
```

to install the packages, and then run

```
npm start
```

to start the development server.

### With Docker Compose

To launch in Docker Compose, first install [docker](https://docs.docker.com/get-docker/) and [docker compose](https://docs.docker.com/compose/).

Depending on your version of docker / docker compose you will then need to run either:

```
docker-compose build && docker-compose up
```

to build and run the project or

```
docker compose build && docker compose up
```

for those with newer installations requiring the newer syntax.

### Running VSCode In Container

VSCode allows you to open a project in a docker container and get busy from there.  It can be a big much if you have multiple environments 
to run (front end / back end apps with related services) as it will open a new window for each docker container, which is annoying.  
**Fortunately for us** this is a single page node application so we can fit it all in one container.

Install Docker + Docker Compose (see above)

Install the [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) Extension for VSCode (ctrl+P in vscode then)

```
ext install ms-vscode-remote.vscode-remote-extensionpack
```

You may need to restart VSCode but from there you can run the command `Remote-ContainersL Open Folder In Containers` and follow the on screen promps to select this directory 
and re-open VSCode in the container.
