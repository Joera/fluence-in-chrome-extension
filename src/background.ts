
// import fetch from "fetch";
import { FluencePeer, KeyPair } from "@fluencelabs/fluence";
import { krasnodar } from "@fluencelabs/fluence-network-environment";
import * as bs58 from 'bs58';
import { isBrowser, isNode, isWebWorker, isJsDom, isDeno } from "browser-or-node";

console.log("when do i run?")

const rustSK = '11h9mC4fkAoZmeQznhtL6NwT6C5xTemmPwX7eeQUyWa7ohW8GezWsqDFitn';

const makeKeyPair =  async (rustSK: string) => {

    const sk = bs58.decode(rustSK);
    const uint8array = new TextEncoder().encode(rustSK).slice(0,32);
    return await KeyPair.fromEd25519SK(uint8array);
}

const selectRelay = () => {

    return krasnodar[1];
}

const initNode = async () => {

    console.log(isJsDom);

    // let relay = selectRelay(); 

    // let local_peer = new FluencePeer();
    // await local_peer.start({
    //     KeyPair: await makeKeyPair(rustSK),
    //     connectTo: relay
    // }); 

    // let status = local_peer.getStatus();
    // console.log(status);
}

initNode();