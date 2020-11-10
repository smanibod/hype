import styled from "styled-components/macro";
export const Info = styled.div`
  font-size: 12px;
  color: white;
`;

export const Container = styled.div`
  text-align: center;
  padding: 5px;
  margin: 0 20px;
  &:hover {
    transform: scale(1.1);
  }
  &:hover ${Info} {
    color: black;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
`;

export const Text = styled.a`
  text-decoration: none;
  color: black;
  font-size: 15px;
  &:hover {
    text-decoration: underline;
  }
`;
