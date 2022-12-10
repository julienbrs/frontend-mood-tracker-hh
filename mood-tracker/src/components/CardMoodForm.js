import moodboardImage from "../assets/moodboard.svg";
import { contractAddresses, abi } from "../constants";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect, useState } from "react";
import { useNotification } from "web3uikit";
import { ethers } from "ethers";

export default function CardMoodForm() {
  const [mood, setYourMood] = useState("");

  const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const moodDiaryAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setYourMood(e.target.value);
  }; /* 
  setMood(string memory _mood) */
  const {
    runContractFunction: setMood,
    data: enterTxResponse,
    isLoading,
    isFetching,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: moodDiaryAddress,
    functionName: "setMood",
    params: {},
  });

  /* View Functions */

  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: abi,
    contractAddress: moodDiaryAddress,
    functionName: "getEntranceFee",
    params: {},
  });

  return <a className="block">HEY ITS MEEEE</a>;
}
