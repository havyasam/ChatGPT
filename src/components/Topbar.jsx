import React from 'react'

export default function Topbar() {
  return (
    <div class="bg-bodygrey  w-full h-12 pt-[8px]">
      <div class = 'flex'>
        <div class = 'flex-none pt-[6px] pl-[20px]  '><p class = "text-textclr font-medium">ChatGPT</p></div>
        <div class = 'flex-none pt-[9px] pl-[4px]'><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-md text-token-text-tertiary " color='rgb(183,183,183)'><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z" fill="currentColor"></path></svg></div>
        <div class = 'flex-none flex ml-[1063px] pl-[10px] pr-[10px] pt-[3px] pb-[3px] rounded-full bg-bodygrey border-[1.7px] border-textgrey '>
          <div class = 'flex-none pt-[3px]'><button ><svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm text-white"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711C16.3166 9.09763 15.6834 9.09763 15.2929 8.70711L13 6.41421V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V6.41421L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289L11.2929 3.29289ZM4 14C4.55228 14 5 14.4477 5 15V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V15C3 14.4477 3.44772 14 4 14Z" fill="currentColor"></path><p>share</p></svg></button></div>
          <div class = 'flex-none text-white font-medium pl-[6px] pt-[3px] text-[13px]' ><p>Share </p></div>
        </div>
        <div class='pl-[11px] pt-[3px]'><img alt="User" width="30" height="30" class="rounded-full" referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/a/AGNmyxYV6hMML38krHIHEj9m2ZoLPraDXfpT_d91-WPv=s96-c"></img></div>
      </div>
      
    </div>
  )
}
