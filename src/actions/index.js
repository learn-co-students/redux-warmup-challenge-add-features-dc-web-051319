import { FETCH_PAINTINGS, SELECT_ACTIVE_PAINTING, REMOVE_ACTIVE_PAINTING, FETCH_BY_MUSEUM } from './types';
import artworks from '../data/artworks';

export function fetchPaintings() {
  return { type: FETCH_PAINTINGS, payload: artworks };
}

export function fetchByMuseum(museum) {
  return { type: FETCH_BY_MUSEUM, payload: museum}
}

export function selectPainting(activeID) {
  return { type: SELECT_ACTIVE_PAINTING, id: activeID };
}

export function removePainting(activeID) {
  return { type: REMOVE_ACTIVE_PAINTING, id: activeID}
}
