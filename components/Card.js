import styled from "styled-components";
import Image from "next/image";

//add layout animation so when each card is clicked, a modal pops up showing more details about the card

//use cms? maybe, maybe not - dato?

export default function Card({ img, imgAlt, title, specs, location, price }) {
  return (
    <Box>
      <div className="img-box"></div>

      <div className="house-details">
        <p>Title</p>
        <div className="specs">5 guests &#8226; 2 bedrooms &#8226; 2 baths</div>
      </div>
      <div className="last">
        <span>location</span>
        <span>&#8358;55k/night</span>
      </div>
    </Box>
  );
}

const Box = styled.div`
  .img-box {
  }

  .house-details {
  }

  .specs {
  }

  .last {
    display: flex;
    justify-content: space-between;
  }
`;
