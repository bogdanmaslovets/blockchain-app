import React, { useContext } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'

import { Loader } from './'
import { TransactionContext } from '../context/TransactionContext'
import { shortenAddress } from '../utils/shortenAddress'

const commonStyles =
  'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-[rgba(171,196,255,0.6)] text-sm text-white'

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    className='my-2 w-full rounded-sm p-2 outline-none placeholder:text-[#ABC4FF] text-white border-none text-sm bg-[#141041]'
    placeholder={placeholder}
    type={type}
    step='0.0001'
    value={value}
    onChange={(event) => handleChange(event, name)}
  />
)

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
    isLoading,
  } = useContext(TransactionContext)

  const handleSubmit = (event) => {
    const { addressTo, amount, keyword, message } = formData

    event.preventDefault()
    if (!addressTo || !amount || !keyword || !message) return

    sendTransaction()
  }

  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
        <div className='flex flex-1 justify-start items-start flex-col mf:mr-20'>
          <h1 className='text-3xl sm:text-5xl text-white py-1'>
            Send Crypto <br /> across the world
          </h1>
          <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
            Explore the crypto world. Buy and sell crytpocurrency easily.
          </p>
          {currentAccount && (
            <button
              type='button'
              onClick={connectWallet}
              className='flex flex-row justify-center items-center my-5 bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full cursor-pointer transition-opacity duration-500 ease-out opacity-100 hover:opacity-60'>
              <AiFillPlayCircle className='text-white mr-2' />
              <p className='text-white text-base font-semibold'>
                Connect Wallet
              </p>
            </button>
          )}
          <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={commonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={commonStyles}>Low fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>
        <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
          <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card'>
            <div className='flex justify-between flex-col w-full h-full'>
              <div className='flex justify-between items-start'>
                <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                  <SiEthereum fontSize={21} color='#fff' />
                </div>
                <BsInfoCircle fontSize={17} color='#fff' />
              </div>
              <div>
                <p className='text-white font-light text-sm'>
                  {shortenAddress(currentAccount)}
                </p>
                <p className='text-white font-semibold text-lg mt-1'>
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className='p-[1px] sm:w-96 w-full flex flex-col justify-start items-center bg-gradient-to-tl from-[#da2eef] via-[#2b6aff] to-[#39d0d8] rounded-[16px]'>
            <div className='p-5 blue-background'>
              <Input
                placeholder='Address To'
                name='addressTo'
                type='text'
                handleChange={handleChange}
              />
              <Input
                placeholder='Amount (ETH)'
                name='amount'
                type='number'
                handleChange={handleChange}
              />
              <Input
                placeholder='Keyword (Gif)'
                name='keyword'
                type='text'
                handleChange={handleChange}
              />
              <Input
                placeholder='Enter Message'
                name='message'
                type='text'
                handleChange={handleChange}
              />

              <div className='h-[1px] w-full bg-[rgba(171,196,255,0.6)] my-2' />
              {isLoading ? (
                <Loader />
              ) : (
                <button
                  type='button'
                  onClick={handleSubmit}
                  className='text-[#58f3cd] w-full mt-2 border-[1px] p-2 border-[#32bbc2] rounded-full cursor-pointer transition-opacity duration-500 ease-out opacity-100 hover:opacity-60'>
                  Send Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
