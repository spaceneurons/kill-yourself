import styled from "styled-components";
import { useState, useEffect } from "react";
import {
	Box,
	Stack,
	Typography,
	Grid,
	Divider,
	Container,
} from "@mui/material";
import theme from "../../themes/theme";

const Testimonials = (props) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
		const getData = async () => {
			const res = await fetch("/api/testimonials");
			const body = await res.json();
			if (res.status !== 200) {
				alert(body.message);
			} else {
				setTestimonials(body);
			}
		};

		getData();
	}, []);
  return (
    <MyContainer>
      { testimonials.length > 0 ? (
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: "2.4rem" }}>
          Testimonials
        </Typography>
        <Divider
          orientation='horizontal'
          border-color={theme.palette.primary.grey}
        />

        <MyGrid>
          {testimonials?.map((testimonial, i) => (
                <Holder key={`${testimonial.name}-${i}`}>
                  <Item>
                    <ImageHolder>
                      <img src={`${testimonial.img}`} alt='' />
                    </ImageHolder>
                    <Content>
                      <p>{testimonial.message}</p>
                      <Meta> - {testimonial.name} </Meta>
                    </Content>
                  </Item>
                </Holder>
              ))
            }
        </MyGrid>
      </Box>):(<Box></Box>)
}
    </MyContainer>
  );
};

export default Testimonials;

const MyContainer = styled.div`
  margin-top: 2.9rem;
`;

const ImageHolder = styled.div`
  float: left;
  margin-right: 15px;
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  img {
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-top: 1.2rem;
  }
`;

const MyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5px;
  @media (min-width: 570px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Meta = styled.div`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 600;
  color: #666;
`;

const Content = styled.div`
  overflow: hidden;
  p {
    margin-bottom: 0;
    font-size: 14px;
    font-style: italic;
  }
`;

const Item = styled.div`
  padding: 20px;
`;

const Holder = styled.div``;
