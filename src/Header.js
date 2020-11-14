import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { NavDropdown } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
//import DropdownItem from "react-bootstrap/esm/DropdownItem";

function Header() {
  return (
    <div className="header">
      <Navbar variant="dark" collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <img
            className="img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAABBVBMVEU8Njb/Kb//////KMMlNinYLKH/KMU5NDNYNkpQNEU5NjJaNUs/NTc9NzcwKSk0LS0pIiKjo6P19fXf39+AfHwsJihDPT61srNeWVrV1tarq6tFQkI6Nzb/J8j/Kb00NzHFxMKMMG51Ml0tNS0xNilENDz/Js0/MzfqK7UjOCYpNjE7NjuAMWQ1NjLoLa7CwMHu7u5STU0jGx5EMT60MY1bMVTLL5atLYFMMkfMMKb0Kr6ZLX0vOiqBL2lONUA5NSsfNx53M1+YMXS8LI8eNi3aLqutL4ttMFQnMzVfLlSaLX92NmmQM3XlLbl5M1q7Lo6IM2A/MSxfMkNiL0pybW+Rj5AZDQ9AYQYkAAAKVklEQVR4nO2ce1vayhaHJyRkSsiNi4iShGqCBDAKXqCi1laqtt1nt8cj9vt/lDOThGQCKHZ3P+q06/2jD0kGmvXLus1MWoQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7lAVnBK0rMURCmaGNFUywrLwAlazqZBfs5TnN+GXsYoFhuaSEUqTHVEgRvYKSzhsWe6ZpKjPbsGv4x3ZgiAKEfaupy2MUI4dIUEeEj/oDm1hCf5VfrT1TvLUwFLR4u+8Xqy2L48TM/YQVuefpHTC2DkuYHImLy4qQBFFeXx12vJ6S0LqNXO2LYizB+3sXHvzErhbzEMXzzvoEQ1CGQT56L1r8RQTiiod7SQGCELxosdexj2choooDjtt5XENqJK2eI2CgCcVrN6enD7GfDeb2T+cMPaOrdDJV2hAVfBvmsvy66vFu2F9+VJiHqDa/Cgz1z664dmVGpCAsC9d/EL2/BMC46uYxvz4nZLcvIUCP71gTz5F8qzUgGKPpDY/zQIOlKvEKGdneNaOL1jtzrU48wNH3uspT9fAEe3r5Ic4QG0e286sNojyuTu7gI+JMYmDb3toiQbJFx0aAsx5wT7tvJhJP4/indppgRyjuLxb3XyaDey0bGY0kGXZpsjkF5hmijK+Oes9+He+NqwLNy8njiBOpOi0e7mTGkQiYTac1UA83Yq4vJ74O9kYEfeCNkfdUlAQ0vuXb6yAnGsW04QoyHdBMpjVQC54QZPiul5wN5Ft5ndINHR56hKkS6Yd9Dskm1mfh0LSRcsjiRnLalBMpkmqcvHhS15mNBD9Q35KAzFAyjP3Pur0LNIkx+Y4tHViHugDGlhar+19Zudgjj1yOQoGSy34SUpw5CJWW356OL5jW+gHNIh+Jxim6ZU4AurxkxaJZVuMZfmuN0mDQ76U2KbvMQ2QR1rvRANnZ5cnR9DUzkma0MStG9FJDvLZ1PaoBpn22hFPOjxlRbV56Cd3L/rMRGr8Ltv6P6oBvczMMfznM+BfQGm7H9OWmZ0qfXV/SoPmX+l3SU3lKBYo0mTJIpk9lOaHPa4Bbo+Zb/+Hqzk0SeqKv6iB/36+xq/QQM1cP3IRXzS/yc5cv2ufL2S1FRq0OyOml86fPdfN/1t4Izs78REnbnu+wq/QALnnjAZ7vPkBmT39nfWDcTtQfzIWrOCG0cDnqUcKUb2bMZsX7W9LUtoqP7DeiExEBYs/8LrRsDRilkLESWfJWtBvroHVlr6zoZDvLJn4rdJAKTI9psOdBkj6r8xqIG/NNwdodV242Gau+9xpYL0fsxII4vjNoiOszInnzIaF332eO/+3UJA7ydZGUchLaD4trvIDKdMfcFYbVelczpZGwunCwujqPpER8fuSYHrN4LlIoDbIQvECZec9KzTQFDahXPIVC6p0suAF4XqK8lMaeEw6EOQbvnJic2vZuxW2fHqWXSJfNXe+YpQcc/V2Tu+ikKZDuoYy2zIRnePmkzVQreCjnUSUI+d52mtC6ifGNHv3vZgsjYr5z5lFlMc0CG7b6WqUI8jnXKVE6TSNBDHf6Z6mpuyMMgXuMQ2weyIz1XW8MOl8xbTdY2b9zGlZFmJ3mW5YER7WQEXudyYhOuKR9+yW/HOUz3k52WMW6Y7x2S67CqA8ZX9B6RSvbLa0jAvcZERNVbuXO3EOJPOdqw8t8kw7E3ZJrJPWhowGb+L9xqB55hYmQiok/alrftyAJPO7dHNIsI8v6JuY6N0ec3LbSzqljAbnN9shu1vXV3NNprzX4qc5UC3vKk2I9qhD99mV9hnTL8h7h7fLNCCNZIRAgmBuKdLZdjnaYPlwnd6+488KIWbfwZCPkpe1nvQ+kijapzzVRe8Lc/P2t5kD95Ri+mjF2VtpT9NAFJxJh5/tFQ1b6caaIw+TXVJLaX5NptKO7bfi80/QwBHFyZnGTSRYt9KIKWiZcmYpPrMcMoz73idoYIsjrtYNLrbTVVTHvswEsfuNmUbt7D7xHU3B9nc7HL25Hii9vdThhatPmYVkRRoyre9YRfRl7FUa2MKkdabyUxab7e5RKoEsfLnNrJwFt60xkxKGHWyt0IDUykmxo3A0TUCo+01O3x+SR172rfs2fXc/dQR5i0ZD5+F/vyAKe6OCh1WuJFBbYznlb3WxnHXzdnLdHheJm7gnorwAiRT/arhV/CxxM0WYYbXu3iT873BJNcOHzIi79z364mLxzQLF4iG6+BQoyu3zG/HLMMsjvWWPsK2wZ6mf9PCScUHTIhcQ4qcvAgAAAAAAeBrRP+N/6bt4Mchs3zD1WqPRwLr+h8qAdWO63y/ncuX+Rmmw9ieqgPVqJZeyXzNe+o6eGwujt7kM5an+0jf1zGCrn5tnqnO0IPjrYBzFQeW+XqvV7zciTxj8SeGAzSgQSqZBS6P+oxp6xUYUDYvZUUvO4/g49hi2rOLs4WvHqEbOb2rhTWNNH1AR9sMjg5JaEx6Gn3D8CRu6acSHyTCcjuMDI3zsVTM9o9dzuXsz7BnqVUI6dEqOpqEL0AtTos5a/X6zauABHddIxoVf48cP9NAN3prMUiI2S/UoEsx1erE2s8akuaJC1dJLNFzW9AGNo3U98qX6bNzaJs0otec045cI7crVM55LOiYcBnmoQRlpGjOW0eBHPfShBzTgpbBouFae2ZW9EP4Z+QF6yA+scphK1s3lGnASDNiY0rvffKAlijTQHtIgdKHKRtXg2g+wfh9mxFkopPcd2vO4BnR6sTkwTEPjWgNkbmbuHmlmAlqlAfk8MKMSyrUG+npWA33/bcT+fm2lBv1avEvNuQZZP8BmOZkykJK4QoOqHldUrjXQ5vIBSjUor9SgnDQOXGuAcT2cKyR1wYgiofwUDXKN30IDosJcfxCmwx+VP0oDcz+cMWVnOGt9VoOHeqTfRoOoSdo40BCe3bSGzYwGmhpewdrvqgFaC7u90kHa2eJomkA0CI3JDaLsz/bVSzVInMmscKZB6AhlMllODIqefqhBiakaOAqbpRpM2cxqhrWGJw1w1CrmNq01A6lt46C+kdTG6Pm+PaCtM45My1XI0bwGeBC2TAd0GDqY5njTgBgULab1S/VGbTDdZ/oD1Ag/3tNaMdgPZwi5MrV8TgOkR5NoOk4rxT8w5WklCRsbM7vjDqkS50QcrS7kNtbXN+il+5kI8xpE4ZOrrK/T1iJXqjAxxAUajk2YUWnE/UEc6DNKRjk2fV4DPCgz4/Z/9HnTgOaEKbPPtLlGa2O0hGaWktP9qhk5zBIN4iW5WCo9yp58aUAeuB7vN1Y2B6a2ttGvVIgGpENcu493H0oNHRl1ctAnphv3ZECF0QDp0yhs+usDE+EaDQneNKAl0WgMBrVwqTxcHY8MxLpRr95X69F2tKEPBg261o4za+7h93W6mlzHYY3FZmPQwIt/yatHVVVDjRtjjGcdMt130YkgWvhZbbejfhIvbL+E4wwtOo8X/+d2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBv+D4HW/RPB13oHAAAAAElFTkSuQmCC"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto ">
            <NavDropdown
              className=" fontsize"
              title="UI KITS & RESOURCES ↓"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                FREE UI KITS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                WEBSITE TEMPLATES
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                MOBILE TEMPLATES
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                WIREFRAME KITS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">ICONS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                DEVICE MOCKUPS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">ANIMATIONS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">
                ILLUSTRATIONS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9">MISC UI</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.10">
                BEST XD PLUGINS
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className=" fontsize" href="#premimumui">
              {" "}
              PREMIUM UI KITS{" "}
            </Nav.Link>
            <NavDropdown
              className=" fontsize"
              title="COLLECTIONS"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                DASHBOARD TEMPLATES
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                LOGIN TEMPLATES
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                E-COMMERCE TEMPLATES
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                FOOD TEMPLATES
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                CHAT TEMPLATES
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                TRAVEL TEMPLATES
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link className=" fontsize" href="#collection">
              COLLECTIONS ↓{" "}
            </Nav.Link> */}
            <Nav.Link className=" fontsize" href="Adobe">
              ADOBE XD COURSE{" "}
            </Nav.Link>
            <Nav.Link className=" fontsize" href="Adobe">
              ADOBE XD COURSE{" "}
            </Nav.Link>
            <Nav.Link className=" fontsize" href="Adobe">
              ADOBE XD COURSE{" "}
            </Nav.Link>
            <Nav.Link className=" fontsize" href="freexd">
              FREE XD GUIDE{" "}
            </Nav.Link>
            <Nav.Link className=" fontsize" href="#tutorials">
              TUTORIALS{" "}
            </Nav.Link>
            <Nav.Link className=" fontsize" href="community">
              COMMUNITY{" "}
            </Nav.Link>
            <img
              className="img_twiter span_design  fontsize"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPeGcoSX2295BuyM-q22lXJIlDHghcVYeTxQ&usqp=CAU"
              alt=""
            />
            <SearchIcon className="search_icon  " />
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="headings">
        <p className="header_p1">Adobe XD Resources, UI kits & Templates</p>
      </div>
      <hr className="break_line" />
      <div className="headings">
        <p className="header_p2">
          THE BIGGEST COLLECTION OF FREE & PREMIUM RESOURCES FOR ADOBE XD
        </p>
      </div>
    </div>
  );
}

export default Header;
