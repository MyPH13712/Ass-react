import React from 'react'

type Props = {}

const Turtorial = (props: Props) => {
    return (
        <div className="max-w-5xl mx-auto bg-gray-500 my-4">
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-6 px-4">
                <div className="flex flex-col justify-start items-start  px-2 lg:px-0">
                    <div >
                        <p className="text-gray-800 dark:text-white lg:text-3xl text-2xl font-extrabold">Hướng dẫn cho người mới bắt đầu</p>
                    </div>
                </div>
            </div>
            <div className="2xl:container 2xl:mx-auto  lg:px-20 md:py-12 md:px-6  px-4 7">
                <div className="flex flex-col justify-start items-start ">
                    <div className="mt-8">
                        <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                            Muốn có một mô hình lắp ghép 3D hoàn hảo và đẹp mắt. Bạn nên sử dụng dụng cụ hộ trợ để quá trình lắp ráp được nhanh và thuận tiện hơn.
                            Các chi tiết có thể dễ dàng tháo ra khỏi tấm thép bằng cách sử dụng một cặp kìm cắt.
                            Một cặp nhíp hoặc kìm mũi nhọn rất được khuyến khích sử dụng trong quá trình lắp ráp.
                        </p>
                    </div>
                    <div className="mt-8 w-full">
                        <img className="w-full" src="https://cf.shopee.vn/file/133e2a62672d6d792e2d279b31cb88b8"  />
                    </div>
                    <div className="mt-8 flex justify-start items-start flex-col">
                        <div className="text-gray-800 dark:text-white mt-4 lg:text-base text-sm leading-normal">
                            <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                                Hãy chú ý đọc thật kĩ tờ hướng dẫn đi kèm trong mỗi sản phẩm trước khi bạn định lắp ráp các mô hình với nhau. Trong tờ hướng dẫn có đánh số thứ tự, bạn không nên tháo tất cả các mảnh ghép ra ngày lúc đàu vì như thế sẽ rất tìm kiếm các mảnh ghép nhỏ trong 1 mớ hỗn độn.
                                Lắp theo thứ tự như đúng tờ giấy hướng dẫn là cách tốt nhất mà bạn nên thực hiện theo.
                            </p>
                        </div>
                        <div className="mt-8 flex-col justify-start items-start">
                            <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                                Các bộ phận khóa lại với nhau bằng cách sử dụng các khớp nối và khe nối. Hãy chú ý đến các kí tự hình tròn và hình tam giác trên tờ hướng dẫn và tấm thép
                                . Các ký hiệu này có ý nghĩa như sau:
                            </p>
                            <br />
                            <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                                <b>Hình tròn:</b> Bạn sẽ phải bẻ khớp nối 90 độ để giữ cho chúng chặt lại với một miếng thép khác. <br />
                                <b>Hình tam giác:</b> Bạn sẽ xoay khớp nối 1 góc 90 độ để khoá các tấm thép cho chặt lại với nhau.
                            </p>
                            
                            <div className="mt-8">
                                <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                                    <b>Lưu ý quan trọng:</b> Nếu bạn gấp bất kỳ mảnh thép nào qua 2 phía khác nhau dọc theo một nếp gấp hơn 2 lần sẽ gây ra tình trạng các khớp nối dễ bị suy yếu hoặc gãy . Hãy chắc chắn rằng bạn sẽ thực hiện điều này một cách nhẹ nhàng nhất.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Turtorial