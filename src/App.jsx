import React from 'react';
import './App.css';
import Button from "./components/Button/Button";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Testimonials from "./components/Testimonials/Testimonials";
import profilePic from "/src/assets/profile-pic-lg.png"

function App() {

  return (
    <>
      <div className="button-component">
        <div>
        <Button color="gray" shape="pill"></Button>
        <Button color="red" shape="pill"></Button>
        <Button color="yellow" shape="pill"></Button>
        <Button color="green" shape="pill"></Button>
        <Button color="blue" shape="pill"></Button>
        <Button color="indigo" shape="pill"></Button>
        <Button color="purple" shape="pill"></Button>
        <Button color="pink" shape="pill"></Button>
        </div>
        <div>
        <Button color="gray" shape="square"></Button>
        <Button color="red" shape="square"></Button>
        <Button color="yellow" shape="square"></Button>
        <Button color="green" shape="square"></Button>
        <Button color="blue" shape="square"></Button>
        <Button color="indigo" shape="square"></Button>
        <Button color="purple" shape="square"></Button>
        <Button color="pink" shape="square"></Button>
        </div>
      </div>
      <div>
       <Banner bannerType="success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum</Banner>
       <Banner bannerType="warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum</Banner>
       <Banner bannerType="error">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum</Banner>
       <Banner bannerType="neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum</Banner>
       <Banner bannerType="success"></Banner>
       <Banner bannerType="warning"></Banner>
       <Banner bannerType="error"></Banner>
       <Banner bannerType="neutral"></Banner>
      </div>

      <Card>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. </Card>

      <div>
      <Testimonials
        name="May Andersons"
        title="Workcation, CTO"
        profilePic={profilePic}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
      </Testimonials> 
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Testimonials
        name="May Andersons"
        title="Workcation, CTO"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
      </Testimonials> 
      </div>

    </>
  )
}

export default App;
