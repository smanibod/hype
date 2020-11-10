import React from "react";
import {
  Container,
  Column,
  Title,
  Link,
  Input,
  Button,
  Icon,
  Break,
  Row,
} from "./footer";

export default function Footer() {
  return (
    <Container>
      <Title></Title>
      <Break></Break>
      <Row>
        <Column>
          <Title>COMPANY</Title>
          <Link href="#">ABOUT</Link>
          <Link href="#">FLAGSHIP</Link>
          <Link href="#">BLOG</Link>
          <Link href="#">CONTACT US</Link>
        </Column>
        <Column>
          <Title>CUSTOMER SERVICE</Title>
          <Link href="#">APPAREL SIZING</Link>
          <Link href="#">FOOTWEAR SIZING</Link>
          <Link href="#">RETURNS/EXCHANGES/CLAIMS</Link>
          <Link href="#">SHIPPING/TRACKING</Link>
          <Link href="#">TERMS AND CONDITIONS</Link>
          <Link href="#">PRIVACY POLICY</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">ACCESSIBILITY</Link>
        </Column>
        <Column>
          <Title>
            TO STAY UP TO DATE ON THE LATEST DIAMOND RELEASES AND COLLECTIONS.
          </Title>
          <Input></Input>
          <Button>Sign Up</Button>
          <Icon></Icon>
          <Icon></Icon>
          <Icon></Icon>
        </Column>
      </Row>
    </Container>
  );
}
