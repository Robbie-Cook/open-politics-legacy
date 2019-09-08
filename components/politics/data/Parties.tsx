
interface Party {
  uid: string
}

export default class Parties {
  private _parties : object[] = []

  constructor(parties : object[]) {
    this._parties = parties
  }

  get parties(): object[] {
    return this._parties
  }
  
  getPartyByUid(partyId: number) : object {
    if(this._parties === null) {
      return {}
    }
    let party: any
    for(party of this._parties) {
      if( parseInt(party.uid) === partyId ) {
        return party
      }
    }
    return {};
  }
}