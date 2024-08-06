import React from 'react';
import styled from 'styled-components';

const PaymentConfirmationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 20px;
  width: 70%;
  margin-left: 250px;
  margin-top: 60px;
  border: 3px solid #ccc;
  border-radius: 20px;
  
`;

const Column = styled.div`
  padding: 20px;
  box-sizing: border-box;
  
  // Apply different widths based on the column order
  &:nth-child(1) {
    width: 40%;
  }
  &:nth-child(2) {
    width: 40%;
  }
  &:nth-child(3) {
    width: 20%;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const StatementDetails = styled.div`
  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-weight: bold;
`;

const ReferenceNumber = styled.div`
  width: 250px;
  font-size: 16px;
  text-align: center;
  padding: 8px 12px;
  
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 7px 14px;
  border: none;
  border-radius: 50px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Character = styled.div`
  text-align: center;

  img {
    max-width: 100%;
  }
`;

const PaymentConfirmation = () => {
  return (
    <PaymentConfirmationWrapper>
      <Column>
        <Title>صورت حساب</Title>
        <StatementDetails>
          <div className="row">
            <div className="item">مورد</div>
            <div className="total">مجموع</div>
          </div>
          <div className="row">
            <div className="item">پکیج هتل های ۵ ستاره</div>
            <div className="total">۳۰,۰۰۰,۰۰۰ تومان</div>
          </div>
        </StatementDetails>
        <TotalAmount>
          <span>مجموع</span>
          <span>۳۰,۰۰۰,۰۰۰ تومان</span>
        </TotalAmount>
      </Column>

      <Column style={{ direction: 'rtl' }}>
        <Title style = {{ fontfamily: 'Noto+Kufi+Arabic', fontSize: '30px', fontWeight: 'bold',textAlign: 'right'}}>پرداخت موفقیت آمیز بود</Title>
        <ReferenceNumber style = {{ color: 'green' , border: '3px solid #ccc', borderRadius: '50px', direction:'rtl'}}>
          <span >شماره رهگیری: 237875616781</span>
          <span></span>
        </ReferenceNumber>
        <p style={{ fontFamily: "Noto+Kufi+Arabic" ,fontSize: '15px', marginTop:'20px'}}> پرداخت شما با موفقیت انجام شد</p>
        <Buttons >
          <Button>جزئیات پرداخت</Button>
          <Button style = {{ color: 'black' , backgroundColor:'white', border: '3px solid #ccc'}}>بازگشت به صفحه قبلی</Button>
        </Buttons>
      </Column>

      <Column>
        <Character>
          <img src="/Mango.png" alt="Mango Character" />
        </Character>
      </Column>
    </PaymentConfirmationWrapper>
  );
};

export default PaymentConfirmation;
