import Prismic from "prismic-javascript"

/**
 * Gets the data for all parties
 * @param apiEndpoint The api endpoint to call
 */
export function getPartyData(apiEndpoint: string) {

  const queryString = Prismic.Predicates.at('document.type', 'party')

  return Prismic.getApi(apiEndpoint)
    .then(api => {
      return api.query(queryString, api.options.req) // Need to query by party type
    })
    .then(response => {
      return response.results
    })
}