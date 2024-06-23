const CoreFooter = () => {
  return (
    <>
      <div className="bg-black">
        <div className="container mx-auto py-20">
          <div className="grid grid-cols-4 gap-8 text-white">
            <div>
              <div className="text-base mb-3.75">GIỚI THIỆU</div>
              <div className="text-sm">
                Đến với Dekor, bạn hoàn toàn yên tâm để chọn được cho mình một
                bộ nội thất phù hợp nhất, kết hợp đầy đủ, hài hòa các yếu tố về
                màu sắc, kiểu dáng, kích thước để làm cho không gian ngôi nhà
                bạn trở nên ấn tượng hơn!
              </div>
            </div>
            <div>
              <div className="text-base mb-3.75">ĐỊA CHỈ LIÊN HỆ</div>
              <div className="text-sm">
                <div className="pb-2.5">Tầng 6, 266 Đội Cấn, Hà Nội</div>
                <div className="pb-2.5">1900 6750</div>
                <div className="pb-2.5">hellocafein@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm text-center py-5">
        &copy; Bản quyền thuộc về{' '}
        <span className="font-semibold">Hai Nguyen 2k1</span>
      </div>
    </>
  )
}

export default CoreFooter
