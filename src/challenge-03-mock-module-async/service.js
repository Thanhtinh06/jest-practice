/**
 * @typedef User
 * @property {string} name
 * @property {number} score
 */

/**
 * @returns {Promise<User[]>} A promist to list of players
 */
export const getAllPlayers = () => {
  /* pseudo code
   return axios.get('/api/players');
   */
  return Promise.reject(new Error('Not implemented yet'));
};
