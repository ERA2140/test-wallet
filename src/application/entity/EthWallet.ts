import {NetworkEnum} from "./enum/network.enum";

export default class EthWallet {

    // eslint-disable-next-line no-useless-constructor
    constructor(public address:string, public network:NetworkEnum) {
    }

    balance() {
    }

}
