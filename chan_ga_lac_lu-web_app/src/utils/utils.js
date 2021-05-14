export function setUserIdToStorage(userId) {
  sessionStorage.setItem('userId', userId);
}

export function getUserIdFromStorage() {
  return sessionStorage.getItem('userId');
}

export function setGameJoinToStorage(gameJoin) {
  sessionStorage.setItem('gameJoin', JSON.stringify(gameJoin));
}

export function setUserFullNameToStorage(name) {
  sessionStorage.setItem('name', name);
}

export function getUserFullNameToStorage() {
  return sessionStorage.getItem('name');
}

export function setJwtToStorage(jwt) {
  sessionStorage.setItem('jwt', jwt);
}

export function getJwtFromStorage() {
  return sessionStorage.getItem('jwt');
}

export function clearStorage() {
  sessionStorage.clear();
}

export function isAuthenticated() {
  return !!getJwtFromStorage();
}

export function isEmptyString(prop) {
  return prop === null || prop === '';
}
