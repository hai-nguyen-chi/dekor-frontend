import { Tab } from '@headlessui/react'
import { FaUser, FaCartPlus, FaSearch } from 'react-icons/fa'

const CoreHeader = () => {
  return (
    <div className="bg-[rgba(0,0,0,0.8)] fixed w-full">
      <div className="container mx-auto py-2 px-4">
        <div className="h-[66px] grid grid-cols-6 items-center">
          <img src="/dekor-logo.webp" alt="" />
          <div className="col-span-5 flex justify-end items-center">
            <Tab.Group className="col-span-5 h-full flex items-center justify-end">
              <Tab.List className="text-white text-xl uppercase">
                <Tab className="px-8 py-3 uppercase text-sm font-bold focus-visible:outline-none">
                  Trang chủ
                </Tab>
                <Tab className="px-8 py-3 uppercase text-sm font-bold focus-visible:outline-none">
                  Giới thiệu
                </Tab>
                <Tab className="px-8 py-3 uppercase text-sm font-bold focus-visible:outline-none">
                  Sản phẩm
                </Tab>
                <Tab className="px-8 py-3 uppercase text-sm font-bold focus-visible:outline-none">
                  Tin tức
                </Tab>
                <Tab className="px-8 py-3 uppercase text-sm font-bold focus-visible:outline-none">
                  Liên hệ
                </Tab>
              </Tab.List>
            </Tab.Group>
            <div className="flex">
              <FaUser className="text-white text-xl mx-2" />
              <FaCartPlus className="text-white text-xl mx-2" />
              <FaSearch className="text-white text-xl mx-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CoreHeader
