import React from 'react';
import styled from 'styled-components';

// Define styled components
const Container = styled.div`
  background-color: #f7fafc;
  padding: 1rem;
  direction: rtl;
  font-family: 'lateef';
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: 25% 45% 30%;
  }
`;

const Card = styled.div`
  background-color: ${props => props.bgColor || '#fff'};
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: ${props => props.align || 'left'};
`;

const Subheading = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Price = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-right: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  font-size: 1.25rem;
  background-color: ${props => props.bgColor || '#ddd'};
  color: ${props => props.color || '#000'};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-left: 0.5rem;
  width: 100%;
  &:hover {
    opacity: 0.9;
  }
`;

const FullButton = styled(Button)`
  width: 100%;
  background-color: #38a169;
  color: #fff;
  margin-top: 0.5rem;
  border-radius: 1.5rem;
`;

const Divider = styled.div`
  border-top: 1px solid #e2e8f0;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Table = styled.table`
  width: 85%;
  margin-right: 3rem;
  margin-bottom: 1rem;
  border-spacing: 0;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const TableHeader = styled.th`
  padding: 0.5rem;
  border: none;
  border-radius: ${props => (props.isFirst ? '0.5rem 0.5rem 0 0' : '0')};
  background-color: #f8f9fa;
`;

const TableData = styled.td`
  padding: 0.5rem;
  border:none;
  border-radius: ${props => (props.isLast ? '0 0 0.5rem 0.5rem' : '0')};
  text-align:center;
`;

const Page2 = () => {
  return (
    <Container>
      <Grid>
        {/* Selected Plan */}
        <Card style={{backgroundColor: '#fbd38d', marginRight:'3rem'}}>
          <Heading  style={{ fontSize: '1.5rem' ,textAlign: 'center'}}>پلن انتخابی شما</Heading>
          <div>
            <Subheading style={{ marginRight: '1.5rem'}}>حرفه ای</Subheading>
            <p style={{ marginRight: '1.5rem'}}>بهترین برای هتل‌های بیش از ۲۰ اتاق</p>
          </div>
          <Divider />
          <Price>
            ۳،۰۰۰،۰۰۰ <span style={{ fontSize: '0.75rem' }}>تومان</span> / سالیانه
          </Price>
          <p style={{ textAlign: 'center', marginBottom: '1rem' }}>امکانات</p>
          <List>
            <ListItem>قیمت گذاری بر اساس استانداردهای بین المللی</ListItem>
            <ListItem>اعمال به همه سیستم های رزرو و مدیریت</ListItem>
            <ListItem>پشتیبانی فنی و مدیریتی</ListItem>
            <ListItem>گزارش دهی و تحلیل کامل</ListItem>
          </List>
        </Card>

        {/* Plan Details */}
        <Card>
          <Heading style={{ fontSize: '1.5rem' , textAlign:'right'}}>جزئیات پلن</Heading>
          <Divider />
          <Table>
            <thead>
              <tr>
                <TableHeader isFirst>قیمت</TableHeader>
                <TableHeader>پشتیبانی</TableHeader>
                <TableHeader>خدمات</TableHeader>
                <TableHeader isFirst>مدیریت کانال</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableData isLast>۳،۰۰۰،۰۰۰</TableData>
                <TableData>a</TableData>
                <TableData>استخر و باشگاه و خشکشویی</TableData>
                <TableData>b</TableData>
              </tr>
            </tbody>
          </Table>
          {/* <p>افزایش دادن هزینه ها</p>
         <div style={{ marginBottom: '1rem' }}>
            <p>پشتیبانی پرداخت</p>
         </div>
          <div style={{ marginBottom: '1rem' }}>
            <p>وضعیت لوکس</p>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p>مدیریت کانال با توصیف بیش از ۳۰۰۰ کانال</p>
          </div> */}
          <p style={{ fontSize: '1.35rem'}}>در آغوش آرام صبح، زمانی که جهان هنوز در لایه‌های نرم
             صبحگاهی پوشیده است، اولین نور به آرامی از افق سر می‌زند، همچون وعده‌ای
             نجوا شده. آسمان، که با رنگ‌های ظریف صورتی و طلایی نقاشی شده است،
             به آرامی زمین را بیدار می‌کند. هر تار علف، که با شبنم درخشان شده،
             نور اولیه را به دام انداخته و مانند هزاران ستاره کوچک می‌درخشد.
            .در این لحظه آرام، زمان به نظر می‌رسد
             که متوقف شده است، تا زیبایی روز جدید با لطافت باز شود و به ما 
            یادآوری کند شگفتی ساده اما عمیقی که در هر طلوع گذرا وجود دارد.</p>
        </Card>

        {/* Account Summary */}
        <Card style={{ marginLeft: '3rem' }}>
          <Heading style={{ marginTop: '20px', fontSize: '1.5rem' , textAlign:'right'}}>صورت حساب</Heading>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', backgroundColor:'#F3F5F6' ,borderRadius:'50px' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '0.5rem'}}>مورد</span>
              <span style={{fontSize: '1.5rem', marginLeft: '0.5rem'}}>مجموع</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{fontSize: '1rem'}}>پلن حرفه ای</span>
              <span style={{fontSize: '1rem'}}>۳،۰۰۰،۰۰۰ تومان</span>
            </div>
          </div>
          <Divider />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span>مجموع</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>۳،۰۰۰،۰۰۰ تومان</span>
          </div>
          <div style={{ display: 'flex', marginBottom: '1rem', justifyContent: 'center' }}>
            <Button bgColor='white' color='#000' style={{ border: '1px solid #000', borderRadius: '50px' }}>پرداخت با پوز</Button>
            <Button bgColor='white' color='#000' style={{ border: '1px solid #000', borderRadius: '50px' }}>ارسال لینک پرداخت</Button>
          </div>
          <FullButton>ثبت و پرداخت</FullButton>
        </Card>

      </Grid>
    </Container>
  );
};

export default Page2;
