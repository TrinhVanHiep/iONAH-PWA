import React from "react";
import Layout from "../../components/Layout";
import "./About.css";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Discount from "./image/chiet_khau.svg";
import Vision from "./image/tam_nhin.jpg";
import Banner from "./image/banner_top.jpg";
import Mission from "./image/mo_hinh_kinh_doanh.jpg";
import Benifit from "./image/quyen_loi.jpg";
import BeIcon1 from "./image/nhap_hang_sieu_toc.svg";
import BeIcon2 from "./image/tin_cay_bao_mat.svg";
import BeIcon3 from "./image/flash.svg";
import BeIcon4 from "./image/chiet_khau.svg";
import Step1 from "./image/step1.png";
import Step2 from "./image/step2.png";
import Step3 from "./image/step3.png";
import Step4 from "./image/step4.png";
import SliderCustom from "./SliderCustom";

function About() {
  const benefitsTop = [
    {
      title: "trả giá hấp dẫn",
      content:
        "Khách hàng có thể tự trả giá sản phẩm với mức giá mong muốn khi đặt hàng tại iONAH.",
    },
    {
      title: "Sản phẩm phân phối độc quyền",
      content:
        "iONAH là đơn vị phân phối online độc quyền vói nhiều sản phẩm như Smart Tivi Casper 58 inch 4K 5BUX.",
    },
    {
      title: "Quà ra mắt",
      content:
        "Chào mừng cửa hàng/ đại lí mới. Tặng ngany chiết khấu sốc cho đơn hàng đầu tiền lên tới 500.000 vnd",
    },
    {
      title: "nhập hàng giá gốc",
      content:
        "Mua càng nhiều, giảm càng sâu. Chiết khấu lên tới 300.000 vnđ/ sản phẩm khi nhập hàng với số lượng lớn.",
    },
    {
      title: "flash deal",
      content:
        "Săn hàng trăm sản phẩm với mức giá ưu đãi hàng đầu thị trường trong khung giờ vàng.",
    },
    {
      title: "Tối ưu hóa trải nghiệm",
      content:
        "Nhập hàng dễ dàng. Thanh toán định danh minh bạch, tiện lợi, cho phép kiểm soát chi tiêu.",
    },
  ];

  const benifitsBottom = [
    {
      icon: BeIcon1,
      title: "Nhập hàng siêu tốc",
      content:
        "hệ thống AI (trí tuệ nhân tạo) giúp tối ưu chi phí khảng cách giao vận giúp hàng đến với người dùng nhanh chóng hơn",
    },
    {
      icon: BeIcon2,
      title: "Tin cậy và bảo mật",
      content:
        "Không còn nỗi sợ lo lắng nguồn hàng kém chất lượng, trôi bảo hành vì iONAH luôn cam kết nguồn hàng đa dạng, phong phú với nguồn gốc xuất xứ rõ ràng với nhiều sản phẩm phân phối độc quyền chính hãng.",
    },
    {
      icon: BeIcon3,
      title: "Flash from factory, free from hustle",
      content:
        "Thấu hiểu nhu cầu khách hàng thông qua các thuật toán Machine Learning ( sử dụng các phương pháp thống kê, các thuật toán để đưa ra phân loại hoặc dự đoán) & hệ thống AI để đưa ra các sản phẩm phù hợp nhất. Tinh giảm mọi thao tác từ lựa chọn sản phẩm đến thanh toán, nhận hàng.",
    },
    {
      icon: BeIcon4,
      title: "Chiết khấu siêu sốc",
      content:
        "Nhờ việc nắm bắt được thông tin và kinh nghiệm nhiều năm trong lĩnh vực điện tử, điện lạnh, những chuyên gia tại iONAH luôn biết cách lựa chọn những sản phẩm uy tín nhất, chất lượng nhất nhằm tối ưu chi phí cho người dùng bằng sự tinh giản, tiết kiệm trong quy trình nhập hàng. Giá luôn tốt nhất, mua lẻ vời giá bán buôn.",
    },
  ];

  const joinPurchase = [
    {
      title: "Truy cập vào website iONAH và đăng nhập bằng số điện thoại.",
      image: Step1,
    },
    { title: "Chọn sản phẩm bạn muốn mua và xác thực cửa hàng", image: Step2 },
    {
      title: "Chọn địa chỉ giao và chọn hình thức thanh toán mong muốn",
      image: Step3,
    },
    { title: "Hoàn thành", image: Step4 },
  ];

  return (
      <div className="about-page">
        <img src={Banner} alt="banner_top" className="about-page_banner" />
        <div className="about-page_intro">
          <h2>Giới thiệu về iONAH</h2>
          <div className="about-page_intro__content">
            <div className="about-page_intro__content___img">
              <img src={Vision} alt="tam_nhin" />
            </div>
            <div className="about-page_intro__content___text">
              <div className="content-top">
                <h3>Tầm nhìn</h3>
                <p>
                  Nền tảng công nghệ số giúp tối ưu hóa lợi ích đa chiều. Áp
                  dụng công nghệ AI giúp việc mua sắm nhanh hơn - thông minh hơn
                  - dễ dàng hơn nhờ việc tối ưu chi phí vận hành, nguồn hàng đa
                  dạng ... và từ đó tối ưu hóa lợi ích của người dùng.
                </p>
              </div>
              <div className="content-bottom">
                <h3>Sứ mệnh</h3>
                <p>
                  iONAH ra đời với mục tiêu phát triển trở thành thương hiệu dẫn
                  đầu thị trường Đông Nam Á về giá bán lẻ cạnh tranh và tốc độ
                  giao hàng bậc nhất trong lĩnh vực bán lẻ xuyên kênh thiết bị
                  điện tử và điện gia dụng. Chúng tôi luôn nỗ lực không ngừng để
                  mang đến giải pháp và quyền lợi tốt nhất cho người tiêu dùng
                  với nền tảng công nghệ số cùng niềm tin vào những giá trị tốt
                  đẹp.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="business-model">
          <div className="business-model_img">
            <img src={Mission} alt="mo_hinh_kinh_doanh" />
          </div>
          <div className="business-model_content">
            <h3>Mô hình kinh doanh</h3>
            <div className="business-model_content__row">
              <div className="business-model_content__row___col">
                <h4>Nền tảng mua sắm đa kênh ngắn nhất </h4>
                <p>
                  iONAH là một nền tảng mua sắm đa kênh bao gồm trang mua sắm
                  trực tuyến và chuỗi cửa hàng concept store với trọng tâm ngành
                  hàng thiết bị điện tử và điện gia dụng.
                </p>
              </div>
              <div className="business-model_content__row___col">
                <h4>Tinh giảm chuỗi cung ứng và thao tác mua hàng</h4>
                <p>
                  iONAH được xây dụng dựa trên mô hình và nền tảng công nghệ AI
                  vượt trội với khả năng kiểm soát chi phí vận hành tối ưu, giảm
                  thiểu khảng cách từ nhà sản xuất tới người tiêu dùng. Khách
                  hàng sẽ được trải nghiệm mua sắm với chi phí cạnh tranh nhất
                  và sản phẩm uy tín, chất lượng trưc tiếp từ kho NSX chính hãng
                  với tốc độ giao hàng nhanh nhất, hệ thống hoạt động 24/7.
                </p>
              </div>
              <div className="business-model_content__row___col">
                <h4>Gia tăng giá trị trải nghiệm cho khách hàng</h4>
                <p>
                  Nơi khách hàng được làm chủ mọi quyết định mua sắm, thời gian
                  giao nhận dựa trên những thông tin chuẩn xác nhất mà không cần
                  tư vấn viên. Mọi thao tác trong suốt quá trình mua sắm sẽ được
                  tối ưu hóa dựa trên hệ thống AI nhằm gia tăng giá trị trải
                  nghiệm cho khách hàng trong quá trình mua sắm tại iONAH.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="benefits-top">
            <h3>Quyền lợi khi sử dụng iONAH</h3>
            <div className="lst-benefit">
              {benefitsTop.map((el, index) => (
                <div className="benefit">
                  <h2 className="benefit_stt">0{index + 1}</h2>
                  <h4>{el.title}</h4>
                  <p>{el.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="benifits-bottom">
          <div className="benifits-bottom_image">
            <img src={Benifit} alt="Benifit" />
          </div>
          <div className="benifits-bottom_content">
            {benifitsBottom.map((el, index) => (
              <div className="item" key={index}>
                <img src={el.icon} alt="icon" />
                <div className="item-right">
                  <h2>{el.title}</h2>
                  <p>{el.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white">
          <div className="join-the-purchasing">
            <h3>Cách thức gia nhập hệ thống mua hàng</h3>
            <p>
              iONAH mang đến khách hàng những giá trị đặc biệt và trải nghiệm
              tuyệt vời trong quá trình mua hàng. Hàng ngàn ưu đãi hấp dẫn trên
              từng model sản phẩm đang đời quý đại lý, cửa hàng. Mua càng nhiều
              giảm càng nhiều. Đặt hàng ngay với 3 thao tác đơn giản.
            </p>
            <div className="lst-step">
              {joinPurchase.map((el, index) => (
                <div className="step-item">
                  <p>{el.title}</p>
                  <img src={el.image} alt="join-the-purchasing-step" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="impressive-business-numbers">
          <div className="impressive-business-numbers_item">
            <h4>Những con số kinh doanh ấn tượng</h4>
            <ul>
              <li>
                Hơn 400 sản phẩm bao gồm điều hòa, máy giặt, máy sấy, tủ lạnh
              </li>
              <li>1250 tài khoản khách hàng B2C</li>
              <li>750 đơn hàng, hơn 11000 sản phẩm đã giao</li>
              <li>điều hòa chiếm 90% doanh thu</li>
              <li>Có mặt tại 20/28 tỉnh thành miền bắc</li>
            </ul>
          </div>
          <div className="impressive-business-numbers_item">
            <h4>Những chỉ số theo dõi website đáng chú ý</h4>
            <ul>
              <li>Số người dùng: 6.948</li>
              <li>
                Lượt xem trang: 171.621 <br></br>
                (Trung bình 27.036 lượt xem trang người dùng)
              </li>
              <li>Thời gian tương tác trung bình 8 phút 41 giây</li>
              <li>Tỷ lệ tương tác trang 73/72 %</li>
              <li>Lượt tìm kiếm sản phẩm 10.838</li>
            </ul>
          </div>
        </div>
        <div className="bg-white">
        <div className="partner">
          <h2>Đối tác của iONAH</h2>
          <SliderCustom />
        </div>
        </div>
      </div>
  );
}

export default About;
