## Kubefirst React Template

This is a React template for Kubefirst projects to maintain frontend standards across the board.

![KubefirstTemplate](/assets/template.png)

## Setup Instructions

- Make sure you are using **NodeJS** >= v16.15.1
- Install dependencies `yarn install`
- Start the server `yarn dev`
- Go to `localhost:3000`
- Enjoy 🥳🎉


## Using Docker

- Build the image

```docker
    docker build --tag kubefirst-frontend-app .
```

- Run docker image 
```
    docker run -p 8001:80 -t kubefirst-frontend-app
```

- Go to `http://localhost:8001`


## Technologies

This project is using the following technologies:
* NextJS (13.0.2)
* React version: 18.2.0
* Redux Toolkit (1.8.4)
* Parcel (2.7.0)
* Storybook (6.5.10)
* Eslint - prettier [Rules](./.eslintrc.json)
* Typescript