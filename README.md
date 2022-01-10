# Pokedex
![](https://github.com/jenehojinchoi/Pokedex/blob/main/assets/signin.png)
![](https://github.com/jenehojinchoi/Pokedex/blob/main/assets/main.png)
![](https://github.com/jenehojinchoi/Pokedex/blob/main/assets/detail.png)

Hi, this README will explain the structure of Pokedex, a pokemon library implemented with React and Django. 

## Main Functionalities
### Frontend 
1. Ability to sign in, sign out, and sign up.
2. Access to main page where pokemons are listed only when signed in.
3. Ability to scroll through the pokemon list - infinite scrolling
4. Ability to like pokemons by clicking the heart of the card - when liked, the heart becomes black
5. Ability to search pokemons with starting alphabet
6. Ability to view my own list of liked pokemons
7. Ability to see each pokemon's details by clicking the card - shown as modal window
8. Deployed using AWS EC2 (deprecated, now only on local)

### Backend
1. Models of user, pokemon, likes_pokemon (contains which user liked which pokemon)
2. View: sign in, sign up, like pokemon, liked pokemon list
3. Hash password of user before saving it in database.
4. Unhash password to check if password input is correct
5. Used relational database, which was set up in AWS RDS. (MySQL) (deprecated, now only on local database)
6. Deployed using AWS EC2 (deprecated, now only on local)


## Structure
### Frontend
The below is the structure of my src directory under pokedex_frontend.
Components directory are divided into main, and signIn, where main directory handles components only in main page, and signIn directory handles components only in sign in, sign up page.
lib directory contains request to backend server.
pages directory contains pages, where components are integrated into one page.
styles directory contains GlobalStyle, which is applied globally to this web app, and theme, which contains color and font sets. 

```
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── index.jsx
│   │   ├── main
│   │   │   ├── Card.jsx
│   │   │   ├── DetailModal.jsx
│   │   │   ├── Grid.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── MainLayer.jsx
│   │   │   └── SearchBar.jsx
│   │   └── signIn
│   │       ├── Input.jsx
│   │       ├── SignButton.jsx
│   │       └── SignForm.jsx
│   ├── index.jsx
│   ├── lib
│   │   ├── api.jsx
│   ├── pages
│   │   ├── MainPage.jsx
│   │   └── SignInPage.jsx
│   ├── actions
│   │   ├── pokemonActions.js
│   ├── reducers
│   │   ├── pokemonReducers.js
│   ├── constants
│   │   ├── pokemonConstants.js
│   ├── store.js
│   └── styles
│       ├── GlobalStyle.jsx
│       └── theme.jsx
```

## Further Improvements
1. Refactoring components for better, more efficient code 
- especially where useEffect is used in components 
2. Completely set up for Redux
- Searching feature has a bug after the implementation of redux
3. Responsive web
- Implementation of responsive web necessary for smooth UX in any devices
4. Load Pokemon data to database

![](https://github.com/jenehojinchoi/Pokedex/blob/main/assets/mobilemain.png)
![](https://github.com/jenehojinchoi/Pokedex/blob/main/assets/mobiledetail.png)

