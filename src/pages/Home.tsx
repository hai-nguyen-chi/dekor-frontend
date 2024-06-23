import { Button } from '@headlessui/react'
import {
  FaHistory,
  FaThumbsUp,
  FaPlane,
  FaArrowsAltH,
  FaCog,
  FaSyncAlt,
  FaRegLightbulb,
  FaGamepad
} from 'react-icons/fa'
import { FaArrowDown } from 'react-icons/fa6'

import { CoreItem, CoreButton, CoreBlog } from '@/components/index.ts'

function Home() {
  return (
    <>
      <section>
        <img src="/slider_1.webp" alt="" />
      </section>
      <section className="container mx-auto py-24">
        <div className="grid grid-cols-2">
          <img src="/about_video.webp" alt="" />
          <div>
            <div className="text-[27px] text-[#333333] font-semibold pt-[10px] pb-5">
              Xin chào! Chúng tôi là Dekor
            </div>
            <div className="text-[14px] text-[#666666] font-normal py-[10px] mt-2">
              Đầu tiên Dekor xin gửi lời chào, kính chúc sức khỏe, thành công và
              lời cảm ơn đến Quý khách hàng đã ủng hộ những sản phẩm của chúng
              tôi. Với hơn 10 năm kinh nghiệm về sản xuất, kinh doanh, thiết kế
              và thi công sản phẩm nội thất phục vụ cho không gian: phòng khách
              gia đình, nhà hàng, café, khách sạn, bar… Dekor thấu hiểu được nhu
              cầu và thị hiếu của người tiêu dùng, tập thể chúng tôi luôn chú
              trọng đầu tư, thiết kế những sản phẩm chất lượng nhằm mang đến một
              không gian sống thật thoải mái, ấm cúng và tiện nghi cho người sử
              dụng.
            </div>
            <Button className="relative border-[1px] border-black text-[12px] font-bold uppercase px-10 py-4 mt-7 hover:text-white hover:bg-black">
              Xem chi tiết
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f5] py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-x-12">
            <div className="text-center py-15 hover:bg-[#e57368] hover:text-white hover:rounded-full">
              <div className="flex justify-center">
                <FaHistory className="text-[#6dd3d1] text-5xl" />
              </div>
              <div className="pt-7.5 pb-1 text-base font-semibold">
                CHÍNH SÁCH ĐỔI TRẢ
              </div>
              <div className="text-sm py-3 px-12.5">
                Sẵn sàng đổi trả trong vòng 24h nếu quý khách không ưng ý mà
                không mất thêm bất cứ khoản chi phí nào
              </div>
            </div>
            <div className="text-center py-15 hover:bg-[#e57368] hover:text-white hover:rounded-full">
              <div className="flex justify-center">
                <FaThumbsUp className="text-[#fabc59] text-5xl" />
              </div>
              <div className="pt-7.5 pb-1 text-base font-semibold">
                ĐỘI NGŨ CHUYÊN NGHIỆP
              </div>
              <div className="text-sm py-3 px-12.5">
                Với đội ngũ nhân viên có kinh nghiệm, nhiệt tình sẽ mang đến cho
                bạn dịch vụ hoàn hảo nhất.
              </div>
            </div>
            <div className="text-center py-15 hover:bg-[#e57368] hover:text-white hover:rounded-full">
              <div className="flex justify-center">
                <FaPlane className="text-[#f1805f] text-5xl" />
              </div>
              <div className="pt-7.5 pb-1 text-base font-semiboldd">
                CHÍNH SÁCH VẬN CHUYỂN
              </div>
              <div className="text-sm py-3 px-12.5">
                Miễn phí vận chuyển cho các đơn hàng trên toàn quốc, hỗ trợ chi
                phí cho các bạn hàng nước ngoài.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/bg_11.webp')]">
        <div className="bg-[#f1805f] pt-11.25 pb-20">
          <div className="text-center text-xl text-white font-semibold py-6.25">
            LÝ DO BẠN NÊN CHỌN CHÚNG TÔI
          </div>
        </div>
        <div className="bg-white/70">
          <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-7 py-10">
              <div className="text-end my-15">
                <div className="flex justify-end">
                  <div className="w-[48px] h-[48px] bg-[#6dd3d1] rounded-full flex justify-center items-center">
                    <FaArrowDown className="text-2xl text-white" />
                  </div>
                </div>
                <div className="text-[17px] font-semibold pt-6.25 pb-2.5">
                  Giá cả tối ưu
                </div>
                <div className="text-sm pl-12.5">
                  DEKOR mang đến cho bạn những sản phẩm tốt nhất với thiết kế
                  tinh tế và giá cả phù hợp với từng đối tượng khách hàng.
                </div>
              </div>
              <div className="text-end my-15">
                <div className="flex justify-end">
                  <div className="w-[48px] h-[48px] bg-[#f1805f] rounded-full flex justify-center items-center">
                    <FaArrowsAltH className="text-2xl text-white" />
                  </div>
                </div>
                <div className="text-[17px] font-semibold pt-6.25 pb-2.5">
                  Lắp đặt nhanh chóng
                </div>
                <div className="text-sm pl-12.5">
                  DEKOR sẽ tới tận nơi lắp đặt nhanh chóng cho bạn trong vòng
                  24h kể từ lúc mua hàng. Tư vấn miễn phí về vị trí lắp đặt.
                </div>
              </div>
              <div className="text-end my-15">
                <div className="flex justify-end">
                  <div className="w-[48px] h-[48px] bg-[#fabc59] rounded-full flex justify-center items-center">
                    <FaCog className="text-2xl text-white" />
                  </div>
                </div>
                <div className="text-[17px] font-semibold pt-6.25 pb-2.5">
                  Dịch vị hậu mãi tốt nhất
                </div>
                <div className="text-sm pl-12.5">
                  DEKOR đảm bảo mang đến cho bạn dịch vụ chăm sóc khách hàng tốt
                  nhất, bảo hành trong vòng 1 năm cho tất cả sản phẩm.
                </div>
              </div>
              <div className="text-end my-15">
                <div className="flex justify-end">
                  <div className="w-[48px] h-[48px] bg-[#fabc59] rounded-full flex justify-center items-center">
                    <FaSyncAlt className="text-2xl text-white" />
                  </div>
                </div>
                <div className="text-[17px] font-semibold pt-6.25 pb-2.5">
                  Thiết kế theo yêu cầu
                </div>
                <div className="text-sm pl-12.5">
                  DEKOR nhận thiết kế theo mọi ý tưởng bạn có thể nghĩ ra, mọi
                  thiết kế bạn muốn.
                </div>
              </div>
              <div className="text-end my-15">
                <div className="flex justify-end">
                  <div className="w-[48px] h-[48px] bg-[#6dd3d1] rounded-full flex justify-center items-center">
                    <FaRegLightbulb className="text-2xl text-white" />
                  </div>
                </div>
                <div className="text-[17px] font-semibold pt-6.25 pb-2.5">
                  Khuyến mại đi kèm
                </div>
                <div className="text-sm pl-12.5">
                  DEKOR luôn luôn có khuyến mại kèm theo cho tất cả các hóa đơn
                  dù lớn hay nhỏ.
                </div>
              </div>
              <div className="text-end my-15">
                <div className="flex justify-end">
                  <div className="w-[48px] h-[48px] bg-[#f1805f] rounded-full flex justify-center items-center">
                    <FaGamepad className="text-2xl text-white" />
                  </div>
                </div>
                <div className="text-[17px] font-semibold pt-6.25 pb-2.5">
                  Miễn phí vận chuyển
                </div>
                <div className="text-sm pl-12.5">
                  DEKOR miễn phí vận chuyển cho mọi đơn hàng trên Toàn quốc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-10">
        <div className="text-center text-xl py-6.25 mb-12.5 font-semibold">
          ĐƯỢC ƯA THÍCH NHẤT
        </div>
        <div className="grid grid-cols-4 gap-8">
          <CoreItem width="100%" height="auto"></CoreItem>
          <CoreItem width="100%" height="auto"></CoreItem>
          <CoreItem width="100%" height="auto"></CoreItem>
          <CoreItem width="100%" height="auto"></CoreItem>
        </div>
        <div className="text-center">
          <CoreButton text="Xem thêm"></CoreButton>
        </div>
      </section>
      <section className="py-10">
        <div className="pt-12.5 pb-15 bg-[#6dd3d1]">
          <div className="text-center text-xl py-6.25 text-white font-semibold">
            DANH MỤC NỔI BẬT
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-2 bg-[url('/category_1.webp')]"></div>
          <div className="bg-[url('/category_2.webp')] h-[280px]"></div>
          <div className="row-span-2 bg-[url('/category_3.webp')] h-100"></div>
          <div className="row-span-2 bg-[url('/category_4.webp')] h-100"></div>
          <div className="bg-[url('/category_5.webp')] h-[280px]"></div>
          <div className="bg-[url('/category_6.webp')] h-[280px]"></div>
          <div className="bg-[url('/category_7.webp')] h-[280px]"></div>
          <div className="bg-[url('/category_8.webp')] h-[280px]"></div>
          <div className="bg-[url('/category_9.webp')] h-[280px]"></div>
        </div>
      </section>
      <section className="container mx-auto py-10">
        <div className="text-center text-xl py-6.25 mb-12.5 font-semibold">
          BÀI VIẾT MỚI NHẤT
        </div>
        <div className="grid grid-cols-2 gap-8">
          <CoreBlog></CoreBlog>
          <CoreBlog></CoreBlog>
        </div>
        <div className="text-center">
          <CoreButton text="Xem thêm"></CoreButton>
        </div>
      </section>
      <section className="bg-[#f5f5f5]">
        <div className="container mx-auto py-30">
          <div className="grid grid-cols-6 gap-3">
            <img src="/hieu_1.webp" alt="" />
            <img src="/hieu_2.webp" alt="" />
            <img src="/hieu_1.webp" alt="" />
            <img src="/hieu_2.webp" alt="" />
            <img src="/hieu_1.webp" alt="" />
            <img src="/hieu_2.webp" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
