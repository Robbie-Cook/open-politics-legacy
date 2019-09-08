import Prismic from "prismic-javascript"

/**
 * Turn an array to an object in case so that the keys
 * don't have to be sequential e.g. {0: {}, 2: {}, 3: {}}
 *
 * @param {array} array The array to sort
 * @param {string} key The key of the object in the array to
 * use. If this is not provided, then the index is used
 */
const mapToKeyedObject = (array, key = null) => {
  let object = {}
  array.forEach((element, index) => {
    let myKey = key ? element[key] : index
    object[myKey] = element
  })
  return object
}

/**
 * Get all member data for all members.
 *
 * @param {string} apiEndpoint The string endpoint to call
 *
 * @return {object} An keyed object of members by UID
 */
export const getMemberData = apiEndpoint => {
  return Prismic.getApi(apiEndpoint)
    .then(api => {
      return api.query(Prismic.Predicates.at('document.type', 'member')) // Need to query by member type
    })
    .then(response => {
      let data = mapToKeyedObject(response.results, "uid")
      return data
    })
}

/**
 * Get a member from a member array
 * @param {object} members
 * @param {string} memberId
 */
export const getMember = (members, memberId) => {
  if (members === null || members[memberId] === undefined) {
    return false
  }
  return members[memberId].data
}
