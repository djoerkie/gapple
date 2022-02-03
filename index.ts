import axios from 'axios';


const api = axios.create({ baseURL: 'https://api.gapple.pw/', });

async function _get<T>(url: string): Promise<T> { return (await api.get(url)).data; }
async function _post<T>(url: string, data: any): Promise<T> { return (await api.post(url, data)).data; }


export interface PHD {
    username: String|null
    uuid: String|null
    name_history: [{ name: String, changedToAt: Number|null }]
    phd: Boolean|null
    error: String|null
}

export interface STATUS {
    username: String|null
    uuid: String|null
    status: String|null
    error: String|null
}

export interface RECLAIM {
    reclaim_possibility: String|null
    error: String|null
}

export interface BLOCKED {
    status: String|null
    drop_time: String|null
    error: String|null
}

export interface CORS_PROFILE {
    id: String|null
    name: String|null
    error: String|null
    errorMessage: String|null
}

export interface CORS_USERNAME {
    id: String|null
    name: String|null
    error: String|null
    errorMessage: String|null
}

export interface CORS_NAMES {
    [index: number]: [{ name: String, changedToAt: Number|null }]
}


/**
 * Check if the user is pseudo hard-deleted
 * @param uuid The uuid to check
 * @returns PHD object
 * @throws Error if the request failed
*/

export async function checkPHD(uuid: string): Promise<PHD> {
    return (await _get<PHD>(`phd/${uuid}`));
}


/**
 * Check the user status
 * @param uuid The uuid to check
 * @returns STATUS object
 * @throws Error if the request failed
*/

export async function checkStatus(uuid: string): Promise<STATUS> {
    return (await _get<STATUS>(`status/${uuid}`));
}


/**
 * Check if the user can be reclaimed
 * @param username_to_check The username to check
 * @param current_username The current username
 * @returns RECLAIM object
 * @throws Error if the request failed
*/

export async function checkReclaim(username_to_check: string, current_username: string): Promise<RECLAIM> {
    return (await _get<RECLAIM>(`reclaim/${username_to_check}?account=${current_username}`));
}


/**
 * Check if the user is blocked
 * @param username The username to check
 * @returns BLOCKED object
 * @throws Error if the request failed
*/

export async function checkBlocked(username: string): Promise<BLOCKED> {
    return (await _get<BLOCKED>(`blocked/${username}`));
}


/**
 * Get the profile of the user by  (proxy)
 * @param uuid The uuid to check
 * @returns CORS_PROFILE object
 * @throws Error if the request failed
*/

export async function getUserProfile(uuid: string): Promise<CORS_PROFILE> {
    return (await _get<CORS_PROFILE>(`cors/profile/${uuid}`));
}


/**
 * Get the profile of the user by username (proxy)
 * @param username The username to check
 * @returns CORS_USERNAME object
 * @throws Error if the request failed
*/

export async function getUserProfileByUsername(username: string): Promise<CORS_USERNAME> {
    return (await _get<CORS_USERNAME>(`cors/username/${username}`));
}


/**
 * Get the names of the user (proxy)
 * @param uuid The uuid to check
 * @returns CORS_NAMES object
 * @throws Error if the request failed
*/

export async function getUserNames(uuid: string): Promise<CORS_NAMES> {
    return (await _get<CORS_NAMES>(`cors/names/${uuid}`));
}