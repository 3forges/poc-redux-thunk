# The Pesto Redux POC


## Run it

```bash

# git clone 
cd ./examples/1/examples/todos-with-undo/
export NODE_OPTIONS=--openssl-legacy-provider
pnpm i && pnpm start

```

## Spin it up

```bash
mkdir -p ./examples/1
git clone https://github.com/reduxjs/redux.git ./examples/1

rm -fr ./examples/1/.git/

cd ./examples/1

cd ./examples/todos-with-undo

if [ -f ./package-lock.json ]; then
  rm -f ./package-lock.json
fi;

cat <<EOF >./package.json
{
  "name": "todos-with-undo",
  "version": "0.0.1",
  "private": true,
  "devDependencies": {
    "@babel/core": "^7.19.0",
    "@types/node": "^18.7.16",
    "@typescript-eslint/eslint-plugin": "^5.36.2",
    "@typescript-eslint/parser": "^5.36.2",
    "cross-env": "^7.0.3",
    "esbuild-extra": "^0.1.3",
    "eslint": "^8.23.0",
    "eslint-config-react-app": "^7.0.1",
    "eslint-import-resolver-typescript": "^3.5.1",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-react": "^7.31.8",
    "eslint-plugin-react-hooks": "^4.6.0",
    "glob": "^8.0.3",
    "netlify-plugin-cache": "^1.0.3",
    "prettier": "^2.7.1",
    "rimraf": "^3.0.2",
    "rxjs": "^7.5.6",
    "tsup": "^6.7.0",
    "typescript": "^4.8.3",
    "vitest": "^0.27.2",
    "react-scripts": "^4.0.3"
  },
  "dependencies": {
    "prop-types": "^15.7.2",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.0",
    "redux": "^4.0.5",
    "redux-undo": "^0.6.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "eject": "react-scripts eject",
    "test": "react-scripts test --env=node --passWithNoTests"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}

EOF
# npm install
# npm start

export NODE_OPTIONS=--openssl-legacy-provider

pnpm remove eslint && pnpm add -D "eslint@^7.11.0"

pnpm install
pnpm start
```


## References

* ccc