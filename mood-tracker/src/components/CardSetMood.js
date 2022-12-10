import { useState, useEffect } from "react";
import moodboardImage from "../assets/moodboard.svg";
import { contractAddresses, abi } from "../constants";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { useNotification } from "web3uikit";
import { ethers } from "ethers";

export default function CardSetMood() {
  const [mood, setYourMood] = useState("");
  const [inputMood, setInputMood] = useState("");
  const [displayForm, setDisplayForm] = useState(false);

  const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const dispatch = useNotification();
  const moodDiaryAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setYourMood(e.target.value);
  };
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

  const { runContractFunction: getMostRecentMood } = useWeb3Contract({
    abi: abi,
    contractAddress: moodDiaryAddress,
    functionName: "getMostRecentMood",
    params: {},
  });

  const handleNewNotification = () => {
    dispatch({
      type: "info",
      message: "Transaction Complete!",
      title: "Transaction Notification",
      position: "topR",
      icon: "bell",
    });
  };
  const handleSuccess = async (tx) => {
    try {
      await tx.wait(1);
      handleNewNotification(tx);
    } catch (error) {}
  };

  async function updateUIValues() {
    const mood = (await getMostRecentMood()).toString();
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUIValues();
    }
  }, [isWeb3Enabled]);

  return (
    <a className="block">
      <div className="max-w-sm p-6 h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h5 className="">DID YOU LOG YOUR MOODS TODAY?</h5>
        {mood === "" ? (
          !displayForm ? (
            <div>
              <p>You didn't log your mood yet</p>
              <button
                onClick={() => setDisplayForm(true)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Set your mood
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <form
              onSubmit={async (event) => {
                event.preventDefault();
                setYourMood(inputMood);
                await setMood({
                  // onComplete:
                  // onError:
                  onSuccess: handleSuccess,
                });
              }}
            >
              <div className="mb-6"></div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">
                  Enter your mood
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Happy"
                  required
                  onChange={(event) => setInputMood(event.target.value)}
                  value={inputMood}
                />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          )
        ) : (
          <p>You mood is {mood}</p>
        )}
      </div>
    </a>
  );
}
