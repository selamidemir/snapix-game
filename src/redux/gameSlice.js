import { createSlice, nanoid } from "@reduxjs/toolkit";
import { gameTypes } from "../assets/gamesDatas";

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        items: [],
        gameStatus: 'waiting',
        gameType: 'frameworks',
        card1: {},
        card2: {},
        foundCards: 0,
        score: 0,
        countdown: false,
        gamer: JSON.parse(localStorage.getItem('snapixGamer')) || { id: nanoid},
    },
    reducers: {
        startNewGame: (state, action) => {
            state.gameStatus = 'started';
            state.score = 0;
            state.foundCards = 0;
            state.countdown = false;
            state.items = [];
            const gameItems = [...gameTypes[state.gameType]];
            gameItems.splice(0, 0, ...gameItems);
            while (gameItems.length) {
                let card = {
                    id: nanoid(),
                    name: gameItems.splice(Math.floor(Math.random() * gameItems.length), 1)[0],
                    found: false,
                }
                state.items.push(card);
            }
        },
        setGamer: (state, action) => {
            state.gamer = action.payload;
            localStorage.setItem('snapixGamer', JSON.stringify(action.payload));
        },
        setCard: (state, action) => {
            if (!state.card1.name) {
                state.card1.id = action.payload.id;
                state.card1.name = action.payload.name;
            } else if (state.card1.name && !state.card2.name) {
                state.card2.id = action.payload.id;
                state.card2.name = action.payload.name;
                state.countdown = true;
            }
        },
        unSetCard: (state, action) => {
            state.card1 = {};
            state.card2 = {};
            state.countdown = false;
        },
        setCardsFound: (state, action) => {
            state.foundCards += 2;
            state.score += 50;
            state.items = state.items.map(item => {
                if(item.id === state.card1.id) item.found = true;
                if(item.id === state.card2.id) item.found = true;
                return item;
            });

            state.card1 = {};
            state.card2 = {};
        },
        setCardsNotFound: (state, action) => {
            state.score -= 10;
        },
        endGame: (state, action) => {
            state.gameStatus = 'finished';
            state.countdown = false;
            state.items = [];
            state.foundCards = 0;
        },
        setGameStatus: (state, action) => {
            state.gameStatus = action.payload;
        }
    }
});

export const getGameItems = state => state.game.items;
export const getCard1 = state => state.game.card1;
export const getCard2 = state => state.game.card2;
export const getFoundCards = state => state.game.foundCards;
export const getScore = state => state.game.score;
export const getGameStatus = state => state.game.gameStatus;
export const getCountdown = state => state.game.countdown;
export const getGamer = state => state.game.gamer;

export const { startNewGame, setGamer, setCard, unSetCard, setCardsFound, setCardsNotFound, endGame, setGameStatus } = gameSlice.actions;
export default gameSlice.reducer;