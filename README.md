# Gapple API
A nodejs api wrapper for https://api.gapple.pw

## Installation

```bash
npm i gapple
```

## Usage

```javascript
const GappleApi = require('gapple');

/*
    Get status of a minecraft profile
    requires uuid
*/
GappleApi.checkStatus('f30de451a4db4d99aa71e4dea1941080').then(resp => {
    console.log(resp)
});


/*
    Check if uuid is pseudo hard-deleted
    requires uuid
*/
GappleApi.checkPHD('1449546f71de47ebbef8809cd3afd6c6').then(resp => {
    console.log(resp)
});


/*
    Check if a username will be reclaimed
    requires username to check and current account username
    !!!! This example will not work anymore because 
*/
GappleApi.checkReclaim('username_to_check', 'current_account_name').then(resp => {
    console.log(resp)
});


/*
    Check if a username is blocked
    requires username
*/
GappleApi.checkBlocked('animate').then(resp => {
    console.log(resp)
});


/*
    Check user profile
    requires uuid
*/
GappleApi.getUserProfile('f30de451a4db4d99aa71e4dea1941080').then(resp => {
    console.log(resp)
});


/* 
    Check user profile by username
    requires username
*/
GappleApi.getUserProfileByUsername('TheFancyBear').then(resp => {
    console.log(resp)
});


/*
    Get previous usernames
    requires uuid
*/
GappleApi.getUserNames('f30de451a4db4d99aa71e4dea1941080').then(resp => {
    console.log(resp)
});
```