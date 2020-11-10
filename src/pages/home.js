import React from "react";
//Components
import { Jumbo, Feature, Card } from "../components";
//Images array
import { featured_home } from "../images/card";

export default function Home() {
  return (
    <>
      <Jumbo />

      <Feature>
        <Card>
          <Card.Image src={featured_home[0]} />
          <Card.Text href="#">WIDE WALE REVERSEIBLE VEST</Card.Text>
          <Card.Info>CA$177.00</Card.Info>
        </Card>
        <Card>
          <Card.Image src={featured_home[1]} />
          <Card.Text>CHECK GARAGE JACKET</Card.Text>
          <Card.Info>CA$202.00</Card.Info>
        </Card>
        <Card>
          <Card.Image src={featured_home[2]} />
          <Card.Text>BRUSHED MOLESKIN CHORE JACKET</Card.Text>
          <Card.Info>CA$215.00</Card.Info>
        </Card>
        <Card>
          <Card.Image src={featured_home[3]} />
          <Card.Text>LOOSE PLAID BRYAN PANT</Card.Text>
          <Card.Info>CA$151.00</Card.Info>
        </Card>
        <Card>
          <Card.Image src={featured_home[4]} />
          <Card.Text>DYED WORK PANT</Card.Text>
          <Card.Info>CA$183.00</Card.Info>
        </Card>
        <Card>
          <Card.Image src={featured_home[5]} />
          <Card.Text>WIDE WALE BLEACH PANT</Card.Text>
          <Card.Info>CA$151.00</Card.Info>
        </Card>
      </Feature>
    </>
  );
}
